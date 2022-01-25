const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    super(github);
    this.github = github;
  }

  getGithub() {}

  //overridden to return 'Manager'
  getRole() {}
}
