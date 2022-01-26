//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

var allPeople = [];

//manager questions
const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager’s name",
    name: "name",
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
];
//engineer questions
const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer’s name",
    name: "name",
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
    writeToFile("./dist/index2.html", managerResponse);
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
    appendFile("index2.html", engineerResponse);
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

//function to write html file
function writeToFile(filename, data) {
  const htmlDoc = generateHtml(data);
  fs.writeFile("./dist/index2.html", htmlDoc, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

//generate the html file
function generateHtml(data) {
  return `<div>${data.name}</div>




  
  `;
}
