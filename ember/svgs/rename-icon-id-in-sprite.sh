#!/bin/bash -e

for f in $(find . -name 'pix-sprite.svg' -not -path './dist/*')
do
  echo "parsing file" $f
  sed -i '' -e 's/-fill_false//g' "$f"
  sed -i '' -e 's/-fill_true/_plain/g' "$f"
done
