#!/bin/bash

NODE_MODULES_BIN_PATH="./node_modules/.bin"

shopt -s expand_aliases

alias linter="node $NODE_MODULES_BIN_PATH/eslint"

prettify() {
  $NODE_MODULES_BIN_PATH/pretty-quick --staged --ignore-path=.prettierignore
}

lint_staged() {
  for file in $(git diff --cached --name-only --diff-filter=d | grep -E '\.js$')
  do
    # lint only the staged changes, not the raw file
    git show ":$file" | linter --stdin --stdin-filename "$file"

    if [ $? -ne 0 ]
    then
      echo "💄 ESLint failed on staged file '$file'."
      # exit with failure status
      exit 1
    fi
  done
}

install_pods() {
  cd ios
  pod install
  cd ..
}

clean_node() {
  rm -rf \
    node_modules \
    package-lock.json \
    yarn.lock
}

clean_ios() {
  rm -rf \
    ios/Pods \
    ios/Podfile.lock
}

clean_android() {
  rm -rf \
    android/.gradle \
    android/.idea \
    android/app/build \
    android/build
}

clean() {
  case "$1" in
    android)
      clean_android
      ;;
    ios)
      clean_ios
      ;;
    node)
      clean_node
      ;;
    *)
      clean_android
      clean_ios
      clean_node
      ;;
  esac
}

case "$1" in
  clean)
    clean "$2"
    ;;
  eslint)
    if [ -z "$2" ]
    then
      files="src"
    else
      files=$(echo "$*" | sed -e "s/$1 //g")
    fi
    linter --ext=js --fix "$files"
    ;;
  post-install)
    install_pods
    ;;
  pre-commit)
    prettify
    lint_staged
    ;;
esac
