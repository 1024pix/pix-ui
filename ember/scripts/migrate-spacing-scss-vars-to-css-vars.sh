#!/bin/bash -e

for f in $(find . -name '*.scss' -not -path './node_modules/*' -not -name '_spacing.scss')
do
  echo "parsing file" $f
  sed -i '' -e 's/$pix-spacing-xxs/var(--pix-spacing-1x)/g' "$f"
  sed -i '' -e 's/$pix-spacing-xs/var(--pix-spacing-2x)/g' "$f"
  sed -i '' -e 's/$pix-spacing-s/var(--pix-spacing-4x)/g' "$f"
  sed -i '' -e 's/$pix-spacing-m/var(--pix-spacing-6x)/g' "$f"
  sed -i '' -e 's/$pix-spacing-l/var(--pix-spacing-8x)/g' "$f"
  sed -i '' -e 's/$pix-spacing-xl/var(--pix-spacing-10x)/g' "$f"
  sed -i '' -e 's/$pix-spacing-xxl/var(--pix-spacing-12x)/g' "$f"

  sed -i '' -e 's/\b4px/var(--pix-spacing-1x)/g' "$f"
  sed -i '' -e 's/\b8px/var(--pix-spacing-2x)/g' "$f"
  sed -i '' -e 's/\b12px/var(--pix-spacing-3x)/g' "$f"
  sed -i '' -e 's/\b16px/var(--pix-spacing-4x)/g' "$f"
  sed -i '' -e 's/\b24px/var(--pix-spacing-6x)/g' "$f"
  sed -i '' -e 's/\b32px/var(--pix-spacing-8x)/g' "$f"
  sed -i '' -e 's/\b40px/var(--pix-spacing-10x)/g' "$f"
  sed -i '' -e 's/\b48px/var(--pix-spacing-12x)/g' "$f"

done
