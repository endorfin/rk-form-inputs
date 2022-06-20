#!/usr/bin/env sh

set -e

npm run docs:build
cd docs/.vuepress/dist

git init
gitwork
git add -A
git commit -m 'deploy'

git push -f git@github.com:endorfin/rk-form-inputs.git master:gh-pages

cd -
