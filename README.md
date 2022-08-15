![image](https://dont-code.net/assets/logo-shadow-squared.png)
## What is it for ?

This application is the "non-development environment", where you describe the application you want without coding.
It is part of the [dont-code](https://dont-code.net) no-code / low-code platform enabling you to quickly produce your very own application.

## What is it ?
This is an Angular application that interactively gets input from the user and sends messages describing the change to do to the application.
It gets the application schema from the core library (extended by plugins), and dynamically generates a form with questions.
![Screenshot](https://dont-code.net/assets/Builder%20define%20Task%20Application.png)

## How is it working ?

## How to build it ?
This project is a standard Angular project:

1. Installing

  `npm install nx -g` Install nx.dev globally

  `npm install`

4. Running
`nx ide-ui:serve:online`

and point your browser to https://localhost:4200

3. Running tests

  `nx run ide-ui:test`

4. Running Cypress End to end tests

   `nx run ide-ui-e2e:e2e`

6. Debugging your plugin in the Builder itself
   We have setup some commands to enable debugging the plugin when run inside the Builder.
   Using npm link is difficult and doesn't work all the time, so we use [Yalc](https://github.com/wclr/yalc).

`npm install yalc -g` Installs the Yalc tool globally

`npm run publish-all` in the dist/libs/XXX directory of your plugin to publish it to Yalc repository, after version increase (to bypass Angular caching)

Then in this project (ide-ui) :
`npm run yalc-add-all` to install all the common plugins and libraries

and

`yalc add @dontcode/plugin-xxxx` to install your plugin using Yalc

You can now set breakpoints in your plugin classes running in the builder, and if you modify your plugin code, just run
`npm run publish-all` again to rebuild it and reload in the builder application.

7. Committing
  If you are using yalc as described above, it modifies the package.json to point to the yalc repository, like this:
   ```
   "@dontcode/core": "file:.yalc/@dontcode/core",
   "@dontcode/plugin-basic": "file:.yalc/@dontcode/plugin-basic",
   "@dontcode/plugin-common": "file:.yalc/@dontcode/plugin-common",
   "@dontcode/plugin-fields": "file:.yalc/@dontcode/plugin-fields",
   "@dontcode/plugin-rest": "file:.yalc/@dontcode/plugin-rest",
   ```

  Before publishing, you need to revert package.json to the standard npm import, you can do it easily with some yalc commands:
```
$> yalc retreat --all
Retreating package @dontcode/core version ==> ^0.5.2
Retreating package @dontcode/plugin-common version ==> ^0.5.2
Retreating package @dontcode/plugin-basic version ==> ^0.5.2
Retreating package @dontcode/plugin-fields version ==> ^0.5.2
Retreating package @dontcode/plugin-rest version ==> ^0.1.3

$> git commit ....
....

$> yalc restore --all
Restoring package `@dontcode/core` from .yalc directory
Restoring package `@dontcode/plugin-common` from .yalc directory
Restoring package `@dontcode/plugin-basic` from .yalc directory
Restoring package `@dontcode/plugin-fields` from .yalc directory
Restoring package `@dontcode/plugin-rest` from .yalc directory
Package @dontcode/plugin-common@0.5.6-3 added ==> /home/gc-garunda/devs/dont-code/github/ide-ui/node_modules/@dontcode/plugin-common
Package @dontcode/plugin-basic@0.5.6-2 added ==> /home/gc-garunda/devs/dont-code/github/ide-ui/node_modules/@dontcode/plugin-basic
Package @dontcode/plugin-rest@0.1.0 added ==> /home/gc-garunda/devs/dont-code/github/ide-ui/node_modules/@dontcode/plugin-rest
Package @dontcode/core@0.5.3-5 added ==> /home/gc-garunda/devs/dont-code/github/ide-ui/node_modules/@dontcode/core
Package @dontcode/plugin-fields@0.5.6-1 added ==> /home/gc-garunda/devs/dont-code/github/ide-ui/node_modules/@dontcode/plugin-fields

```
  
## Thank you

This project was generated using [Nx](https://nx.dev), visit the [Nx Documentation](https://nx.dev/angular) to learn more.
