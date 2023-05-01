const supertest = require("supertest");
const server = require("../src/server");
const session = require("supertest");
const agent = session(server);
// const require = require("supertest");

describe("TEST DE RUTAS", () => {
  describe("GET /onsearch/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/onsearch/1");
      expect(response.statusCode).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
      const response = await agent.get("/onsearch/1");
      expect(Object.keys(response.body)).toEqual([
        "id",
        "name",
        "species",
        "gender",
        "image",
      ]);
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/onsearch/IDqueNoExiste");
      expect(response.statusCode).toBe(500);
    });
  });

  //---------------------------------------DETAIL----------------------------------------//

  describe("GET /detail/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/detail/1");
      expect(response.statusCode).toBe(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async () => {
      const response = await agent.get("/detail/1");
      expect(Object.keys(response.body)).toEqual([
        // toEqual considera iguales dos objetos que tienen las mismas propiedades con los mismos valores.. pero si usara tobe haria lo mismo pero compara el mismo espacio de memoria y eso en objetos y array es diferente que el resto de tipos de datos..
        "id",
        "image",
        "name",
        "gender",
        "species",
        "origin",
      ]);
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = await agent.get("/detail/IDqueNoExiste");
      expect(response.statusCode).toBe(500);
    });
  });

  //--------------------------------------GET_FAVORITOS--------------------------------------//

  describe("GET /favoritos", () => {
    it("GET responde con un array los personajes", function () {
      return supertest
        .get("/favoritos")
        .expect(200)
        .expect("Content-Type", /json/);
    });

    it("si hay un error responde con un status: 500", async () => {
      const response = await agent.get("/favoritos");
      expect(response.statusCode).toBe(500);
    });
  });
});
