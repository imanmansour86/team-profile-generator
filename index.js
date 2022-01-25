//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

//manager questions
const maangerQuestions = [
  {
    type: "input",
    message: "What is the team manager’s name",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is team manager’s employee ID",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is team manager’s email address",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is team manager’s office number",
    name: "managerOffice",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add",
    name: "managerChoice",
    choices: [
      "Engineer",
      "Intern",
      "I dont' want to add any more team members",
    ],
  },
];
//engineer questions
const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer’s name",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer’s employee ID",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineer’s email address",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer’s GitHub username",
    name: "engineerGithub",
  },
];

// intern questions
const internQuestions = [
  {
    type: "input",
    message: "What is the intern’s name",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the intern’s ID",
    name: "internId",
  },
  {
    type: "input",
    message: "What is the intern’s email address",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is the intern’s school",
    name: "internSchool",
  },
];

// call on the function to dispaly main menu
init();
function init() {
  console.log("Welcome to team generator!\nStart building your team");
  mainMenu();
}

function mainMenu() {
  inquirer.prompt(maangerQuestions).then((managerResponse) => {
    // console.log(managerResponse);
    switch (managerResponse.managerChoice) {
      case "Add Engineer":
        addEngineer();
        break;
      case "Add Intern":
        addIntern();
        break;
      case "Exit":
        console.log("GoodBye");
    }
  });
}

//function to add engineer
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerResponse) => {
    console.log(engineerResponse);
    init();
  });
}

//function to add intern
function addIntern() {
  inquirer.prompt(internQuestions).then((engineerResponse) => {
    console.log(engineerResponse);
    mainMenu();
  });
}
