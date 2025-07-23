import { expect } from "chai";
import supertest from "supertest";

//const expect = chai.expect;
const request = supertest("http://localhost:8081");

describe("testing adoptme", () => {
  /*
  describe("tests pets", () => {

    it("test POST cria um pet corretamente", async () => {
      // arrange
      const petMock = {
        name: "Rex",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      // act
      const response = await request.post("/api/pets").send(petMock);

      //console.log(response)

      // assert
      expect(response.statusCode).to.be.equal(200);
      expect(response.ok).to.be.equal(true);
      expect(response._body.payload).to.have.property("_id");
    });

    it("test criar um pet com dados incompletos", async () => {
      //Arrange
      const petMock = {
        specie: "dog",
        birthDate: "10-10-2010",
      };

      //Act
      const { statusCode, ok, _body } = await request
        .post("/api/pets")
        .send(petMock);

      //console.log({ statusCode, ok, _body });
      //Assert
      expect(statusCode).to.be.equal(400);
      expect(ok).to.be.equal(false);
      expect(_body.status).to.be.equal("error");
      expect(_body.error).to.be.equal("dados faltando");
    });

    it("test GET retorna todos os pets corretamente", async () => {
      // arrange

      //act
      const { statusCode, ok, _body } = await request.get("/api/pets");

      // assert
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.be.an("array");
    });

    it("test GET retorna um pet corretamente by id", async () => {
      // arrange
      const petMock = {
        name: "bolinha",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      const pet = await request.post("/api/pets").send(petMock);

      // act
      const { statusCode, ok, _body } = await request.get(
        `/api/pets/${pet.body.payload._id}`
      );

      // asset
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body.payload).to.be.an("object");
      expect(_body.payload).to.have.property("_id");
      expect(_body.payload._id).to.be.equal(pet.body.payload._id);
      expect(_body.payload.name).to.be.equal("bolinha");
    });

    it("test delete retorna um pet corretamente by id", async () => {
      // arrange
      const petMock = {
        name: "rufos",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      const pet = await request.post("/api/pets").send(petMock);

      // act
      const { statusCode, ok, _body } = await request.delete(
        `/api/pets/${pet.body.payload._id}`
      );

      // console.log({ statusCode, ok, _body })

      // asset
      expect(statusCode).to.be.equal(200);
      expect(ok).to.be.equal(true);
      expect(_body).to.be.an("object");
      expect(_body).to.have.property("status");
      expect(_body.message).to.be.equal("pet deleted");
    });
  });
 */
  describe("unprotected login", () => {
    it("erro ao tentar fazer um login sem o dado de email", async () => {
      // arrange
      const mockUser = { password: 123 };

      // act
      const { statusCode, _body } = await request
        .post("/api/sessions/unprotectedLogin")
        .send(mockUser);

      // assert
      expect(statusCode).to.be.eql(400);
    });

    it("erro ao tentar fazer um login de uma pessoa nao cadastrada", async () => {
      // arrange
      const mockUser = { email: "dfsfdsfsfd@teste.com", password: 123 };
      // act
      const { statusCode, _body } = await request
        .post("/api/sessions/unprotectedLogin")
        .send(mockUser);
      // assert
      expect(statusCode).to.be.eql(404);
    });
  
    it("erro ao tentar fazer um login com uma senha errada", async () => {
      // arrange
      const mockUser = {
        first_name: "Gui",
        last_name: "salzer",
        email: "guisalzer@gmail.com",
        password: "123",
      };
      // Registra o usuário
      await request
        .post("/api/sessions/register")
        .send(mockUser);

      // act
      const { statusCode, _body } = await request
        .post("/api/sessions/unprotectedLogin")
        .send({ email: mockUser.email, password: "senhaErrada" });
      // assert
      expect(statusCode).to.be.eql(400); 
    });
    
  });
  
  describe("pets com imagem", () => {
    it("deve criar um pet com a rota da imagem", async () => {
      // arrange
      const petMock = {
        name: "Rex",
        specie: "dog",
        birthDate: "10-10-2010",
      };

      // act
      const result = await request
        .post("/api/pets/withimage")
        .field("name", petMock.name)
        .field("specie", petMock.specie)
        .field("birthDate", petMock.birthDate)
        .attach("image", "./tests/teste.png");

       console.log(result._body)
      // assert
      expect(result.ok).to.be.eql(true);
      expect(result._body.payload).to.have.property("_id");
      expect(result._body.payload.image).to.be.ok;
      expect(result._body.payload.name).to.be.equal(petMock.name)
    });
  });
  
});
