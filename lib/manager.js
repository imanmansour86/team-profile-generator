const Employee = require("./employee");

class Managers extends Employee {
  constructor(officeNumber) {
    super(officeNumber);
    this.officeNumber = officeNumber;
  }

  //overridden to return 'Manager'
  getRole() {}
}
