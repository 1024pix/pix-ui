#!/bin/bash

set -euxo pipefail

source "$(dirname $0)"/common.sh

RELEASE_TAG="v$1"

echo "Version number ${RELEASE_TAG}"

function get_release_commit_hash {
    local commit_hash

    commit_hash="$(git rev-parse --verify --quiet "${RELEASE_TAG}")"

    if [ -z "${commit_hash}" ];
    then
        echo -e "${RED}Version ${RELEASE_TAG} does not exist!${RESET_COLOR}\n" >&2
        exit 1
    fi

    echo "Fetched release commit hash"
}

function update_master_branch {
    local annotated_version
    local annotated_tag_hash

    annotated_version="${RELEASE_TAG}^{}"
    annotated_tag_hash="$(git rev-parse --quiet "${annotated_version}")"
    git push -f "$annotated_tag_hash":master

    echo "Pushed changes on branch origin/master"
}

function deploy_storybook_on_gh-pages {
    npm run deploy-storybook
    echo "Deploying storybook on https://1024pix.github.io/pix-ui/"
}


function complete_change_log() {    
    node "${CWD_DIR}/get-pull-requests-to-release-in-prod.js" "${NEW_PACKAGE_VERSION}"
    echo "Updated CHANGELOG.md"
}

echo "Start deploying version ${RELEASE_TAG}…"

get_release_commit_hash
update_master_branch
deploy_storybook_on_gh-pages
complete_change_log

echo -e "Release deployment ${GREEN}succeeded${RESET_COLOR}."