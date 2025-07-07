#!/usr/bin/env bash

# Set colors
RESET_COLOR="\033[0m"
BOLD="\033[1m"
OFFBOLD="\033[21m"

# Colors (bold)
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
CYAN="\033[1;36m"

function clone_repository_and_move_inside {
  REPOSITORY_FOLDER=$(mktemp -d)
  echo "Created temporary directory ${REPOSITORY_FOLDER}"

  git clone "https://github.com/1024pix/pix-ui.git" "${REPOSITORY_FOLDER}"
  echo "Cloned repository to temporary directory"

  cd "${REPOSITORY_FOLDER}" || exit 1
  echo "Moved to repository folder"
}

function configure_git_user_information {
  git config user.name "Pix Bot"
  git config user.email "sam@bot.pix.fr"
  echo "Set Git user information"
}