![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![lang](https://img.shields.io/github/languages/top/imanmansour86/team-profile-generator)
![repo size](https://img.shields.io/github/repo-size/imanmansour86/team-profile-generator)
![last commit](https://img.shields.io/github/last-commit/imanmansour86/team-profile-generator)

# Team profile generator

## Description

This app is a Node.js command-line application that collects information about employees based on certain questions. After all questions are answered, an HTML webpage is generated that displays summaries for each person. The application uses Inquirer for collecting input from the user, as well as Jest for running the unit tests.

## Table of Contents

- [Team profile generator](#team-profile-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo](#demo)
  - [Features](#features)
  - [Tests](#tests)
  - [Built With](#built-with)
  - [Resources Used](#resources-used)
  - [Author](#author)
  - [License](#license)

## Installation

- Go to the app's [repo](https://github.com/imanmansour86/team-profile-generator) in github and clone the app
- From terminal: navigate to app's directoty and run:

  ```md
  $ npm install
  ```

- To invoke the app from terminal, run:

  ```md
  $ node index.js
  ```

  ## Usage

Screenshot of questions prompt in command line:

![command-line]()

Screenshot of the response:
![response]()

## Demo

- [Demo Link](https://watch.screencastify.com/v/QD0TTK5ZuCQsqXI2DbX1)

## Features

When running the app in terminal, the user will be prompted to enter the team manager’s name, employee ID, email address, and office number. The manager can add an engineer, an intern, or finish building the team. If the manager wants to add an engineer, a prompt appears to enter the engineer’s name, ID, email, and GitHub username. If the manager wants to add an intern, a prompt appears to enter the intern’s name, ID, email, and school. When the manager finishes building the team, an HTML doc is generated.

## Tests

Unit tests are written for each class: Employee, Manager, Engineer and Intern. The testing covers the initilization of new instance of the class, as well as testing the methods.

To run the test:
Navigate to app's directoty in termina and run:

```md
$ npm run test
```

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Nodejs](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs)
- [Jest](https://jestjs.io/)

## Resources Used

- [W3schools](https://www.w3schools.com)
- [stackoverflow](https://stackoverflow.com)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/new-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

This project is licensed under the MIT License
