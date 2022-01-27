const Intern = require("../lib/intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should create an object with name,id,email and school", () => {
      const intern = new Intern("mike", 202, "mike@gmail.com", "Berkeley");

      expect(intern.name).toEqual("mike");
      expect(intern.id).toEqual(202);
      expect(intern.email).toEqual("mike@gmail.com");
      expect(intern.school).toEqual("Berkeley");
    });
  });

  describe("getSchool", () => {
    it("Should get the school of the intern", () => {
      const intern = new Intern("mike", 202, "mike@gmail.com", "Berkeley");
      expect(intern.getSchool()).toEqual("Berkeley");
    });
  });

  describe("getRole", () => {
    it("Should get the role of the intern", () => {
      const intern = new Intern("mike", 202, "mike@gmail.com", "Berkeley");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
