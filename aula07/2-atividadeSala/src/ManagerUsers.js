const fs = require('fs').promises;
const path = require('path');

class ManagerUsers {
  constructor() {
    this.path = path.join(__dirname, 'data', 'users.json');
    this.createIfNotExists();
  }

  async createIfNotExists() {
    try{
      await fs.access(this.path);
    } catch (error) {
      await fs.mkdir(path.dirname(this.path), { recursive: true });
      await fs.writeFile(this.path, '[]');
    } 
  }

  async readFile() {
    try {
      const data = await fs.readFile(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading file:', error);
      return [];
    }
  }

  async writeFile(data) {
    try {
      const dataToSave = JSON.stringify(data, null, 2);
      await fs.writeFile(this.path, dataToSave);
    } catch (error) {
      console.error('Error writing file:', error);
    }
  }

  async getUsers() {
    return this.readFile();
  }

  async getUserById(id) {
    const users = await this.readFile();
    const userFound = users.find((user) => user.id === +id);
    return userFound;
  }

  async updateUser(id, updatedUser) {
    const users = await this.readFile();
    const userIndex = users.findIndex((user) => user.id === +id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    // Validações
    if (!updatedUser.firstName || !updatedUser.lastName || !updatedUser.email || !updatedUser.course) {
      throw new Error('Missing user data');
    }

    users[userIndex] = { id, ...updatedUser };
    await this.writeFile(users);
    return users[userIndex];
  }

  async createUser(firstName, lastName, email, course) {
    const users = await this.readFile();

    // Validações
    if (!firstName || !lastName || !email || !course) {
      throw new Error('Missing user data');
    }

    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1, // ID automático
      firstName,
      lastName,
      email,
      course,
    };

    users.push(newUser);
    await this.writeFile(users);
    return newUser;
  }

  async getUserByName(firstName) {
    const users = await this.readFile();
    return users.find((user) => user.firstName === firstName);
  }

  async deleteUser(id) {
    const users = await this.readFile();
    const userIndex = users.findIndex((user) => user.id === +id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    await this.writeFile(users);
    return deletedUser;
  }

  async patchUser(id, updatedFields) {
    const users = await this.readFile();
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const existingUser = users[userIndex];
    const patchedUser = { ...existingUser, ...updatedFields, id };

    users[userIndex] = patchedUser;
    await this.writeFile(users);
    return patchedUser;
  }  
}

module.exports = ManagerUsers;