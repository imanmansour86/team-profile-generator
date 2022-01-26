//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

var managers = [];
var engineers = [];
var interns = [];

//manager questions
const managerQuestions = [
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
  //   {
  //     type: "list",
  //     message: "Which type of team member would you like to add",
  //     name: "managerChoice",
  //     choices: [
  //       "Engineer",
  //       "Intern",
  //       "I dont' want to add any more team members",
  //     ],
  //   },
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
//add more people questions
const addMoreQuestions = [
  {
    type: "list",
    message: "Which type of team member would you like to add",
    name: "addMore",
    choices: [
      "Engineer",
      "Intern",
      "I dont' want to add any more team members",
    ],
  },
];

function addMore() {
  inquirer.prompt(addMoreQuestions).then((addMoreQuestionsResponse) => {
    switch (addMoreQuestionsResponse.addMore) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "I dont' want to add any more team members":
        console.log("GoodBye");
    }
  });
}

// call on the function to dispaly main menu
init();
function init() {
  console.log("Welcome to team generator!\nStart building your team");
  mainMenu();
}

function mainMenu() {
  inquirer.prompt(managerQuestions).then((managerResponse) => {
    console.log(managerResponse);
    managers.push(managerResponse);
    addMore();

    // switch (managerResponse.managerChoice) {
    //   case "Engineer":
    //     addEngineer();
    //     break;
    //   case "Intern":
    //     addIntern();
    //     break;
    //   case "I dont' want to add any more team members":
    //     console.log("GoodBye");
    // }
  });
}

//function to add engineer
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerResponse) => {
    console.log(engineerResponse);
    engineers.push(engineerResponse);
    addMore();
  });
}

//function to add intern
function addIntern() {
  inquirer.prompt(internQuestions).then((internResponse) => {
    console.log(internResponse);
    addMore();
  });
}
