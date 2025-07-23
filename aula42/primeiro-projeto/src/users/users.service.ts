import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;
  id: number;

  constructor() {
    this.users = [];
    this.id = 0;
  }
  create(createUserDto: CreateUserDto) {
    this.id++;
    const user = {
      id: this.id,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user: User = this.users.find((u) => u.id === id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((u) => u.id === id);
    const user = {
      id: id,
      ...updateUserDto,
    } as User;
    this.users[index] = user;
    return user;
  }

  remove(id: number) {
    const users = this.users.filter((u) => u.id !== id);
    this.users = users;
    return `This action removes a #${id} user`;
  }
}
