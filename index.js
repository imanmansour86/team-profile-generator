//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

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

//generate the html file
function generateHtml(data) {
  let currentObject = ``;
  console.log("all data here is", data);
  data.forEach((item) => {
    console.log("item here is", item);
    if (item.getRole() === "Manager") {
      currentObject += `
      
          <div class="grid">
            <div class="g-col-6 g-col-md-4">
              <div class="card single-card" style="width: 18rem">
                <div class="card-header d">${item.getRole()}
                <br />${item.name}</div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${item.id}</li>
                  <li class="list-group-item">Email:${item.email}</li>
                  <li class="list-group-item">Office#: ${item.officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>
      
          `;
    } else if (item.getRole() == "Engineer") {
      currentObject += `
      
          <div class="grid">
            <div class="g-col-6 g-col-md-4">
              <div class="card single-card" style="width: 18rem">
                <div class="card-header d">${item.getRole()}
                <br />${item.name}/div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${item.id}</li>
                  <li class="list-group-item">Email:${item.email}</li>
                  <li class="list-group-item">Office#: ${item.github}</li>
                </ul>
              </div>
            </div>
          </div>
      
          `;
    } else if (item.getRole() == "Intern") {
      currentObject += `
      
          <div class="grid">
            <div class="g-col-6 g-col-md-4">
              <div class="card single-card" style="width: 18rem">
                <div class="card-header d">${item.getRole()}
                <br />${item.name}/div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID:${item.id}</li>
                  <li class="list-group-item">Email:${item.email}</li>
                  <li class="list-group-item">Office#: ${item.getSchool()}</li>
                </ul>
              </div>
            </div>
          </div>
      
          `;
    }
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header>
      <div class="head">My Team</div>
    </header>

    ${currentObject}

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;
}
