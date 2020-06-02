#!/bin/bash

set -euxo pipefail


CWD_DIR=$(pwd)

echo "${CWD_DIR}"

source "${CWD_DIR}/common.sh"

VERSION_TYPE=$1

echo "Version type ${VERSION_TYPE}"

function get_package_version() {
  node -p -e "require('./package.json').version"
}

function clone_repository_and_move_inside {
  REPOSITORY_FOLDER=$(mktemp -d)
  echo "Created temporary directory ${REPOSITORY_FOLDER}"

  git clone git@github.com:1024pix/pix-ui.git "${REPOSITORY_FOLDER}"
  echo "Cloned repository to temporary directory"

  cd "${REPOSITORY_FOLDER}"
  echo "Moved to repository folder"
}

function configure_git_user_information {
  git config user.name Pix bot
  git config user.email pix@
  echo "Set Git user information"
}

function install_required_packages {
  npm install
  echo "Install packages"
}

function create_and_deploy_release {
  npm run release:${VERSION_TYPE}
  echo "Deploy new release"
}

echo "Start deploying version ${VERSION_TYPE}…"

NEW_PACKAGE_VERSION=$(get_package_version)
# clone_repository_and_move_inside
configure_git_user_information
# install_required_packages
create_and_deploy_release

echo -e "Release deployment ${GREEN}succeeded${RESET_COLOR}."
