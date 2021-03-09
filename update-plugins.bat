cd ..\plugins
call nx run screen:build --prod
call npm pack dist/libs/screen
call nx run fields:build --prod
call npm pack dist/libs/fields
cd ..\ide-ui
del dontcode-plugin-*.tgz
move ..\plugins\dontcode-plugin-screen-*.tgz .
move ..\plugins\dontcode-plugin-fields-*.tgz .
forfiles /M dontcode-plugin-*.tgz /C "cmd /c npm install @file"
