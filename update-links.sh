#!/bin/sh
cd ../core/node
nx run core:build

cd ../../plugins
nx run common:build --prod
nx run basic:build --prod
nx run screen:build --prod
nx run fields:build --prod

cd ../plugin-rest
nx run rest:build --prod

cd ../ide-ui
npm link ../core/node/dist/libs/core ../plugins/dist/libs/common ../plugins/dist/libs/basic ../plugins/dist/libs/screen ../plugins/dist/libs/fields ../plugin-rest/dist/libs/rest
