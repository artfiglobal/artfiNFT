#!/bin/bash

REPO_NAME="artfi-app-backend"

cd ~/Projects/${REPO_NAME}

git checkout ${1} 
git pull origin ${1} 

yarn
yarn build

pm2 restart ${REPO_NAME}

echo "Deploy script finished execution"

