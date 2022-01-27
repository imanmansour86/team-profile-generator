//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const generateHtml = require("./src/generateHtml");

var allPeople = [];

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

        writeToFile("./dist/index2.html", allPeople);
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
    const manager = new Manager(
      managerResponse.managerName,
      managerResponse.managerId,
      managerResponse.managerEmail,
      managerResponse.managerOffice
    );
    allPeople.push(manager);

    allPeople.forEach((a) => {
      if (a.getRole() === "Manager") {
        console.log("Manager found");
      }
    });

    console.log("all people after add manager", allPeople);

    addMore();
  });
}

//function to add engineer
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerResponse) => {
    console.log(engineerResponse);
    const engineer = new Engineer(
      engineerResponse.engineerName,
      engineerResponse.engineerId,
      engineerResponse.engineerEmail,
      engineerResponse.engineerGithub
    );

    allPeople.push(engineer);

    addMore();
  });
}

//function to add intern
function addIntern() {
  inquirer.prompt(internQuestions).then((internResponse) => {
    console.log(internResponse);
    const intern = new Intern(
      internResponse.internName,
      internResponse.internId,
      internResponse.internEmail,
      internResponse.internSchool
    );
    console.log(intern.getRole());
    allPeople.push(intern);
    allPeople.forEach((a) => {
      if (a.getRole() === "Intern") {
        console.log("found it");
      }
    });
    console.log("all people after add intern", allPeople);
    addMore();
  });
}

//function to write html file
function writeToFile(filename, data) {
  console.log("data here is", data);
  const htmlDoc = generateHtml(data);
  console.log("html doc here", htmlDoc);
  fs.writeFile("./dist/index2.html", htmlDoc, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}
