const request = require("supertest");
const app = require("../index"); // export app from index.js

describe("GET /", () => {
  it("should return welcome text", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Welcome to MetroFlex API");
  });
});
