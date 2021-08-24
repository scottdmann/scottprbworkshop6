 const request = require("supertest");
    const app = require("../index");

    describe("GET /", () => {
      it("responded with test 'Hello CSE3PRB'", (done) => {
        request(app).get("/").expect("Hello CSE3PRB", done);
      })
    });