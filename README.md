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
   `npm install`

2. Running
`npm run nx serve ide-ui --configuration=online --hmr`

and point your browser to https://localhost:4200

3. Running tests

  `npm run nx run ide-ui:test`

4. Running Cypress End to end tests

   `npm run nx e2e ide-ui-e2e`


## Thank you

This project was generated using [Nx](https://nx.dev), visit the [Nx Documentation](https://nx.dev/angular) to learn more.
