const Manager = require("../lib/manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should create an object with name,id,email and officeNumber", () => {
      const manager = new Manager("mike", 202, "mike@gmail.com", "202");

      expect(manager.name).toEqual("mike");
      expect(manager.id).toEqual(202);
      expect(manager.email).toEqual("mike@gmail.com");
      expect(manager.officeNumber).toEqual("202");
    });

    it("should throw an error if manager 'name' is not a string", () => {
      const cb = () => new Manager(22, 202, "mike@gmail.com", "202");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });
  });

  describe("getOffice", () => {
    it("Should get the office of the manager", () => {
      const manager = new Manager("mike", 202, "mike@gmail.com", "202");
      expect(manager.getOffice()).toEqual("202");
    });
  });

  describe("getRole", () => {
    it("Should get the role of the manager", () => {
      const manager = new Manager("mike", 202, "mike@gmail.com", "202");
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
