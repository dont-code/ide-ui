#!/bin/sh
cd ../core/node
nx run core:build

cd ../../plugin-rest
nx run rest:build --prod

cd ../ide-ui
npm link ../core/node/dist/libs/core ../plugin-rest/dist/libs/rest
