# Introduction

This is a single web application created using Reactjs.\
Application is created for viewing F1 race stats starting from 2015 until the current year. Users will be able to see race winners for a selected year as well as the seasonal winner for the given year.

## Architectural Decisions Summary

To create a Single Page Application as per the requirements I chose **React** becasue it one of the most popular and developer friendly libraries with tons of support. It's easy to get started have some powerful features I really like. It's also the front-end library/framework I'm most familiar with.

For state management of the application I used Mobx since it's more easier to setup and much more cleaner in my opinion.
It gives the ability to maintain data layer seperatly to the UI components.

Directory structure ensures that there is a clear seperation between components, stores, models, stores and styles of the application. The components are written to ensure that they can be re-used if needed.

In the application, testing is handled by react-testing-library which is bundled with create-react-app.

For continuous integration of the application, Github actions has been used. On every push to the master branch a job executes, it installs the dependencies and will check for linting and code formatting issues as well as will run the tests of the application. This makes sure that code quality is maintained in the codebase and will help identifying mistakes beforehand.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Opens application in [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run eslint`

Show warnings/errors according to the eslint rules.

### `npm run prettier`

Show warnings/errors according to the prettier rules.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
