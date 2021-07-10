#!/bin/sh
cd ../core/node
nx run core:build
cd ../../ide-ui
npm link ../core/node/dist/libs/core
cd ../plugins
nx run common:build --prod
nx run basic:build --prod
nx run screen:build --prod
nx run fields:build --prod

cd ../ide-ui
npm link ../plugins/dist/libs/common ../plugins/dist/libs/basic ../plugins/dist/libs/screen ../plugins/dist/libs/fields
