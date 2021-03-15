cd ..\core\node
call nx run core:build
cd ..\..\ide-ui
call npm uninstall @dontcode/core
call npm install "..\core\node\dist\libs\core"
