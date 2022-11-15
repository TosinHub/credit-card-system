const request = require("supertest");
const app = require("./app");

describe("CREDIT CARD SYSTEM", () => {


  it("POST  /cards ---> created cards ", () => {
    return request(app)
      .post("/cards")
      .send({
        name: "Oluwatosin Gbenga",
        card_number: 4353342343425,
        limit: 2000
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
            expect.objectContaining({
              name: "Oluwatosin Gbenga",
              card_number: 4353342343425,
              limit: 2000
            }),
        
        );
      });
  });



  it("GET /cards --> array of cards ", () => {
    return request(app)
      .get("/cards")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              card_id: 2,
              name: expect.any(String),
              card_number: expect.any(Number),
              limit: expect.any(Number),
            }),
          ])
        );
      });
  });
});
