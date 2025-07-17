import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import { expect } from "chai";

before(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});

after(async () => {
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");
});

describe("Dao Users", () => {
  let userDao;
  before(async () => {
    userDao = new User();
  });
  beforeEach(function () {
    this.timeout(5000);
  });
  describe("function - get", () => {
    it("sucesso - dao deve retornar os usuarios em um array", async () => {
      const expetedUser = [
        {
          _id: "66523cdf22a8c6fa0c3a1328",
          name: "Gui Salzer",
          email: "guisalzer@gmail.com",
          role: "admin",
          pets: [],
        },
      ];
      const resultado = await userDao.get();

      expect(resultado[0]).to.be.an("object");
      expect(resultado).to.be.an("array");
    });
  });
  describe("getbyID", () => {
    it("deve retornar um usuario especifico", async () => {
      // arrange
      const resultado = await userDao.get();
      const expectedUser = resultado[0];
      const id = expectedUser._id;
      console.log(expectedUser);

      // act
      const user = await userDao.getBy(id);
      console.log(user);

      expect(user.first_name).to.be.equal(expectedUser.first_name);
      expect(user).to.be.an("object");
      expect(user).to.have.property("first_name");
    });
  });

  describe("delete", () => {
    it("Deve deletar um usuario", async () => {
      const usersBefore = await userDao.get();
      const id = usersBefore[0]._id;
      await userDao.delete(id);

      const usersAfter = await userDao.getBy(id);
      console.log(usersAfter);
      expect(usersAfter).to.be.equal(null);
    });

    it("delete 2", async () => {
      // Arrange
      const user = {
        first_name: "Mari",
        email: "johnsoe7@gmail.com",
        last_name: "Ramos Mohr",
        password: "sdfsdfsafbdbdagd",
      };

      const resultado = await userDao.save(user);
      const id = resultado._id;
      // act
      await userDao.delete(id);

      // asserts
      const usersAfter = await userDao.getBy(id);
      console.log(usersAfter);
      expect(usersAfter).to.be.equal(null);
    });
  });
});
