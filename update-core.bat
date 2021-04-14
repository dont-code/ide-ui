cd ..\core\node
call nx run core:build
cd ..\..\ide-ui
call npm link "..\core\node\dist\libs\core"
