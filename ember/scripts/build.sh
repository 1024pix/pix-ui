#!/bin/bash -e

if [ "$REVIEW_APP" == "true" ]
then
  npm run build-storybook
else
  npm run build-ember
fi