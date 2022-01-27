const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create an object with name,id,email and github", () => {
      const engineer = new Engineer("mike", 202, "mike@gmail.com", "mike202");

      expect(engineer.name).toEqual("mike");
      expect(engineer.id).toEqual(202);
      expect(engineer.email).toEqual("mike@gmail.com");
      expect(engineer.github).toEqual("mike202");
    });
  });

  describe("getGithub", () => {
    it("Should get the github of the engineer", () => {
      const engineer = new Engineer("mike", 202, "mike@gmail.com", "mike202");
      expect(engineer.getGithub()).toEqual("mike202");
    });
  });

  describe("getRole", () => {
    it("Should get the role of the engineer", () => {
      const engineer = new Engineer("mike", 202, "mike@gmail.com", "mike202");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
