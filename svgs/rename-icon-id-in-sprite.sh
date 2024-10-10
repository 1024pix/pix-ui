#!/bin/bash -e

for f in $(find . -name 'pix-sprite.svg' -not -path './dist/*')
do
  echo "parsing file" $f
  sed -i '' -e 's/_24dp_E8EAED_FILL0_wght500_GRAD0_opsz24//g' "$f"
  sed -i '' -e 's/_24dp_E8EAED_FILL1_wght500_GRAD0_opsz24/_plainIcon/g' "$f"
done
