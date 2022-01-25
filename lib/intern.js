const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(school);
    this.school = school;
  }

  getSchool() {}

  //overridden to return 'Manager'
  getRole() {}
}
