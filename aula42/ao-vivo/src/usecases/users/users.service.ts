import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  #users: Array<User>;
  id: number;

  constructor() {
    this.#users = [];
    this.id = 0;
  }
  findAll(limit: number) {
    return this.#users.slice(0, limit);
  }
  create(createUserDto: CreateUserDto) {
    this.id++;
    const user = {
      id: this.id,
      ...createUserDto,
    };
    this.#users.push(user);
    return user;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // encontro o index do user que eu quero alterar
    const index = this.#users.findIndex((u) => {
      return u.id === id;
    });
    // crio um novo user
    const newUser = {
      ...this.#users[index],
      ...updateUserDto,
    };
    // coloco na posicao inicial do meu array o user alterado
    this.#users[index] = newUser;
    // retorno o user já alterado
    return this.#users[index];
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
