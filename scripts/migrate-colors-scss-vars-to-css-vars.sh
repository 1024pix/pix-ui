#!/bin/bash -e

for f in $(find . -name '*.scss' -not -path './node_modules/*' -not -name '_colors.scss')
do
  echo "parsing file" $f
  sed -i '' -e 's/$pix-primary-5/var(--pix-primary-10)/' "$f"
  sed -i '' -e 's/$pix-primary-10/var(--pix-primary-100)/' "$f"
  sed -i '' -e 's/$pix-primary-20/var(--pix-primary-100)/' "$f"
  sed -i '' -e 's/$pix-primary-30/var(--pix-primary-300)/' "$f"
  sed -i '' -e 's/$pix-primary-40/var(--pix-primary-500)/' "$f"
  sed -i '' -e 's/$pix-primary-60/var(--pix-primary-700)/' "$f"
  sed -i '' -e 's/$pix-primary-70/var(--pix-primary-700)/' "$f"
  sed -i '' -e 's/$pix-primary-80/var(--pix-primary-900)/' "$f"
  sed -i '' -e 's/$pix-primary/var(--pix-primary-500)/' "$f"

  sed -i '' -e 's/$pix-secondary-50/var(--pix-secondary-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-5/var(--pix-secondary-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-10/var(--pix-secondary-100)/' "$f"
  sed -i '' -e 's/$pix-secondary-20/var(--pix-secondary-300)/' "$f"
  sed -i '' -e 's/$pix-secondary-40/var(--pix-secondary-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-60/var(--pix-secondary-700)/' "$f"
  sed -i '' -e 's/$pix-secondary-80/var(--pix-secondary-900)/' "$f"
  sed -i '' -e 's/$pix-secondary/var(--pix-secondary-500)/' "$f"

  sed -i '' -e 's/$pix-tertiary-50/var(--pix-tertiary-500)/' "$f"
  sed -i '' -e 's/$pix-tertiary-5/var(--pix-tertiary-100)/' "$f"
  sed -i '' -e 's/$pix-tertiary-10/var(--pix-tertiary-100)/' "$f"
  sed -i '' -e 's/$pix-tertiary-20/var(--pix-tertiary-100)/' "$f"
  sed -i '' -e 's/$pix-tertiary-30/var(--pix-tertiary-100)/' "$f"
  sed -i '' -e 's/$pix-tertiary-60/var(--pix-tertiary-900)/' "$f"
  sed -i '' -e 's/$pix-tertiary-70/var(--pix-tertiary-900)/' "$f"
  sed -i '' -e 's/$pix-tertiary-80/var(--pix-tertiary-900)/' "$f"
  sed -i '' -e 's/$pix-tertiary/var(--pix-tertiary-500)/' "$f"

  sed -i '' -e 's/$pix-neutral-0/var(--pix-neutral-0)/' "$f"
  sed -i '' -e 's/$pix-neutral-5/var(--pix-neutral-20)/' "$f"
  sed -i '' -e 's/$pix-neutral-15/var(--pix-neutral-20)/' "$f"
  sed -i '' -e 's/$pix-neutral-20/var(--pix-neutral-20)/' "$f"
  sed -i '' -e 's/$pix-neutral-22/var(--pix-neutral-100)/' "$f"
  sed -i '' -e 's/$pix-neutral-25/var(--pix-neutral-100)/' "$f"
  sed -i '' -e 's/$pix-neutral-30/var(--pix-neutral-100)/' "$f"
  sed -i '' -e 's/$pix-neutral-35/var(--pix-neutral-100)/' "$f"
  sed -i '' -e 's/$pix-neutral-40/var(--pix-neutral-500)/' "$f"
  sed -i '' -e 's/$pix-neutral-45/var(--pix-neutral-500)/' "$f"
  sed -i '' -e 's/$pix-neutral-50/var(--pix-neutral-500)/' "$f"
  sed -i '' -e 's/$pix-neutral-60/var(--pix-neutral-500)/' "$f"
  sed -i '' -e 's/$pix-neutral-70/var(--pix-neutral-800)/' "$f"
  sed -i '' -e 's/$pix-neutral-80/var(--pix-neutral-800)/' "$f"
  sed -i '' -e 's/$pix-neutral-90/var(--pix-neutral-900)/' "$f"
  sed -i '' -e 's/$pix-neutral-100/var(--pix-neutral-900)/' "$f"
  sed -i '' -e 's/$pix-neutral-110/var(--pix-neutral-900)/' "$f"
  sed -i '' -e 's/$pix-neutral-10/var(--pix-neutral-20)/' "$f"

  sed -i '' -e 's/$pix-success-50/var(--pix-success-500)/' "$f"
  sed -i '' -e 's/$pix-success-5/var(--pix-success-50)/' "$f"
  sed -i '' -e 's/$pix-success-10/var(--pix-success-100)/' "$f"
  sed -i '' -e 's/$pix-success-20/var(--pix-success-300)/' "$f"
  sed -i '' -e 's/$pix-success-30/var(--pix-success-300)/' "$f"
  sed -i '' -e 's/$pix-success-60/var(--pix-success-700)/' "$f"
  sed -i '' -e 's/$pix-success-70/var(--pix-success-700)/' "$f"
  sed -i '' -e 's/$pix-success-80/var(--pix-success-900)/' "$f"
  sed -i '' -e 's/$pix-success/var(--pix-success-500)/' "$f"

  sed -i '' -e 's/$pix-warning-50/var(--pix-warning-500)/' "$f"
  sed -i '' -e 's/$pix-warning-5/var(--pix-warning-50)/' "$f"
  sed -i '' -e 's/$pix-warning-10/var(--pix-warning-100)/' "$f"
  sed -i '' -e 's/$pix-warning-20/var(--pix-warning-300)/' "$f"
  sed -i '' -e 's/$pix-warning-30/var(--pix-warning-300)/' "$f"
  sed -i '' -e 's/$pix-warning-40/var(--pix-warning-500)/' "$f"
  sed -i '' -e 's/$pix-warning-60/var(--pix-warning-700)/' "$f"
  sed -i '' -e 's/$pix-warning-70/var(--pix-warning-700)/' "$f"
  sed -i '' -e 's/$pix-warning-80/var(--pix-warning-900)/' "$f"

  sed -i '' -e 's/$pix-error-50/var(--pix-error-500)/' "$f"
  sed -i '' -e 's/$pix-error-5/var(--pix-error-50)/' "$f"
  sed -i '' -e 's/$pix-error-10/var(--pix-error-100)/' "$f"
  sed -i '' -e 's/$pix-error-20/var(--pix-error-500)/' "$f"
  sed -i '' -e 's/$pix-error-30/var(--pix-error-500)/' "$f"
  sed -i '' -e 's/$pix-error-40/var(--pix-error-500)/' "$f"
  sed -i '' -e 's/$pix-error-60/var(--pix-error-700)/' "$f"
  sed -i '' -e 's/$pix-error-70/var(--pix-error-700)/' "$f"
  sed -i '' -e 's/$pix-error-80/var(--pix-error-900)/' "$f"
  sed -i '' -e 's/$pix-error-90/var(--pix-error-900)/' "$f"

  sed -i '' -e 's/$pix-secondary-certif-50/var(--pix-certif-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif-5/var(--pix-certif-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif-10/var(--pix-certif-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif-20/var(--pix-certif-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif-30/var(--pix-certif-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif-60/var(--pix-certif-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif-70/var(--pix-certif-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif-80/var(--pix-certif-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-certif/var(--pix-certif-50)/' "$f"

  sed -i '' -e 's/$pix-secondary-orga-50/var(--pix-orga-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga-5/var(--pix-orga-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga-10/var(--pix-orga-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga-20/var(--pix-orga-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga-30/var(--pix-orga-50)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga-60/var(--pix-orga-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga-70/var(--pix-orga-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga-80/var(--pix-orga-500)/' "$f"
  sed -i '' -e 's/$pix-secondary-orga/var(--pix-orga-50)/' "$f"

  sed -i '' -e 's/$pix-information-dark/var(--pix-information-dark)/' "$f"
  sed -i '' -e 's/$pix-information-light/var(--pix-information-light)/' "$f"

  sed -i '' -e 's/$pix-content-dark/var(--pix-content-dark)/' "$f"
  sed -i '' -e 's/$pix-content-light/var(--pix-content-light)/' "$f"

  sed -i '' -e 's/$pix-communication-dark/var(--pix-communication-dark)/' "$f"
  sed -i '' -e 's/$pix-communication-light/var(--pix-communication-light)/' "$f"

  sed -i '' -e 's/$pix-security-dark/var(--pix-security-dark)/' "$f"
  sed -i '' -e 's/$pix-security-light/var(--pix-security-light)/' "$f"

  sed -i '' -e 's/$pix-environment-dark/var(--pix-environment-dark)/' "$f"
  sed -i '' -e 's/$pix-environment-light/var(--pix-environment-light)/' "$f"

done