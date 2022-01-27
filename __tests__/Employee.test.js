const Employee = require("../lib/employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with name,id and email", () => {
      const employee = new Employee("mike", 202, "mike@gmail.com");

      expect(employee.name).toEqual("mike");
      expect(employee.id).toEqual(202);
      expect(employee.email).toEqual("mike@gmail.com");
    });
  });

  describe("getName", () => {
    it("Should get the name of the employee", () => {
      const employee = new Employee("mike", 202, "mike@gmail.com");
      expect(employee.getName()).toEqual("mike");
    });
  });

  describe("getId", () => {
    it("Should get the id of the employee", () => {
      const employee = new Employee("mike", 202, "mike@gmail.com");
      expect(employee.getId()).toEqual(202);
    });
  });

  describe("getEmail", () => {
    it("Should get the email of the employee", () => {
      const employee = new Employee("mike", 202, "mike@gmail.com");
      expect(employee.getEmail()).toEqual("mike@gmail.com");
    });
  });

  describe("getRole", () => {
    it("Should get the role of the employee", () => {
      const employee = new Employee("mike", 202, "mike@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
