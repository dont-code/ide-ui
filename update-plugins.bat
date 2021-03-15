cd ..\plugins
call nx run common:build --prod
call nx run screen:build --prod
call nx run fields:build --prod
cd ..\ide-ui
call npm uninstall @dontcode/plugin-common @dontcode/plugin-screen @dontcode/plugin-fields
call npm install "..\plugins\dist\libs\common" "..\plugins\dist\libs\screen" "..\plugins\dist\libs\fields"
