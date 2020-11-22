cd ..\plugins
call nx run screen:build
call npm pack dist/libs/screen
cd ..\ide-ui
move ..\plugins\dontcode-plugin-screen-*.tgz .
del dontcode-plugin-screen-dev.tgz
ren dontcode-plugin-screen-*.tgz dontcode-plugin-screen-dev.tgz
call npm install dontcode-plugin-screen-dev.tgz
