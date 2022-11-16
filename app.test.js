const request = require("supertest");
const app = require("./app");

describe("CREDIT CARD SYSTEM", () => {
  it("POST  /cards ---> created cards ", async () => {
    const res = await request(app)

      .post("/cards")
      .send({
        name: "Oluwaseun Adebola",
        card_number: "5399836647231989",
        trans_limit: 4000
      });

      expect(res.status).toEqual(201)
      expect(res.body)
      expect(res.body.json)


      });
  



  it("GET /cards --> array of cards ", () => {
    return request(app)
      .get("/cards")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body)
        expect(res.body.json)
        expect(res.body.json.message)
      });
  });

  
});
