const Employee = require("../lib/employee.js");

describe("Employee", () => {
  it("Should create an object with name,id and email", () => {
    const employee = new Employee("mike", 202, "mike@gmail.com");

    expect(employee.name).toEqual("mike");
    expect(employee.id).toEqual(202);
    expect(employee.email).toEqual("ike@gmail.com");
  });
});

// class Employee {
//     constructor(name, id, email) {
//       this.name = name;
//       this.id = id;
//       this.email = email;
//     }

//     getName() {
//       return this.name;
//     }

//     getId() {
//       return this.id;
//     }

//     getEmail() {
//       return this.email;
//     }

//     getRole() {
//       return "Employee";
//     }
//   }
