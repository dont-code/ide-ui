#!/bin/sh
cd ../core/node
nx run core:build

cd ../../ide-ui
npm link ../core/node/dist/libs/core
