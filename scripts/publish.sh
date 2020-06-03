#!/bin/bash

set -euxo pipefail

CWD_DIR=$(pwd)

echo "${CWD_DIR}"

source "${CWD_DIR}/scripts/common.sh"

NEW_VERSION_TYPE=$1

function get_package_version() {
  node -p -e "require('./package.json').version"
}

function ensure_no_uncommited_changes_are_present() {
  if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}You have uncommitted changes!${RESET_COLOR} Please commit or stash your changes first.\n"
    git status
    exit 1
  fi
  echo "Git changes status OK"
}

function ensure_new_version_is_either_minor_or_patch_or_major() {
  if [ "${NEW_VERSION_TYPE}" != "patch" -a "${NEW_VERSION_TYPE}" != "minor" -a "${NEW_VERSION_TYPE}" != "major" ]; then
    echo -e "${RED}Wrong argument!${RESET_COLOR} Only ${GREEN}patch${RESET_COLOR}, ${GREEN}minor${RESET_COLOR} or ${GREEN}major${RESET_COLOR} is allowed.\n"
    exit 1
  fi

  echo "Version type OK"
}

function checkout_dev() {
  git checkout dev >>/dev/null 2>&1
}

function fetch_and_rebase() {
  git fetch --tags
  git pull --rebase
}

function update_pix_ui_module_version() {
  npm version "${NEW_VERSION_TYPE}" --git-tag-version=false >>/dev/null
  NEW_PACKAGE_VERSION=$(get_package_version)

  echo "Bumped versions in package files"
}

function complete_change_log() {
  node "${CWD_DIR}/scripts/get-pull-requests-to-release-in-prod.js" "${NEW_PACKAGE_VERSION}"

  echo "Updated CHANGELOG.md"
}

function create_a_release_commit() {
  git add  --update CHANGELOG.md
  git add  --update package*.json
          
  git commit --message "[RELEASE] A ${NEW_VERSION_TYPE} is being released to ${NEW_PACKAGE_VERSION}."

  echo "Created the release commit"
}

function push_commit_to_remote_dev() {
  git push origin dev

  echo "Pushed release commit on branch origin/dev"
}

function checkout_master() {
  git checkout master >>/dev/null 2>&1

  echo "Checked out branch master"
}

function create_a_merge_commit_of_dev_into_master_and_tag_it() {
  git merge dev --no-edit
  git tag --annotate "v${NEW_PACKAGE_VERSION}" --message "v${NEW_PACKAGE_VERSION}"

  echo "Merged changes from dev into master and created annotated tag"
}

function push_commit_and_tag_to_remote_master() {
  git push origin master
  git push origin "v${NEW_PACKAGE_VERSION}"

  echo "Pushed changes on branch origin/master with tag"
}

function deploy_storybook_to_ghpages() {
    npm install
    npm run deploy-storybook
    echo "Deploying storybook on https://1024pix.github.io/pix-ui/"
}

echo -e "Preparing a new release.\n"

echo "== Clone and move into Pix repository =="
clone_repository_and_move_inside
configure_git_user_information

echo "== Validate context =="
ensure_no_uncommited_changes_are_present
ensure_new_version_is_either_minor_or_patch_or_major

echo "== Package release =="
checkout_dev
fetch_and_rebase
update_pix_ui_module_version "/tmp/pixui"
complete_change_log
create_a_release_commit
push_commit_to_remote_dev

echo "== Publish release =="
checkout_master
fetch_and_rebase
create_a_merge_commit_of_dev_into_master_and_tag_it
push_commit_and_tag_to_remote_master

echo "== Deploy Storybook to Github Pages =="
deploy_storybook_to_ghpages

echo -e "Release publication ${GREEN}succeeded${RESET_COLOR}."