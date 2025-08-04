import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private config: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.userModel.create(createUserDto);
      return user;
    } catch (error) {
      throw new Error(`Impossivel cadastrar usuario: ${error.message}`);
    }
  }

  async findAll(limit: number): Promise<Array<User>> {
    console.log(limit);
    const realLimit = limit ?? +this.config.get<number>('limitDefault');
    console.log(realLimit);
    const allUsers = await this.userModel.find();
    return allUsers.slice(0, +realLimit);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: id });

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userModel.updateOne({ _id: id }, updateUserDto);
    const user = await this.findOne(id);
    return user;
  }

  async remove(id: string): Promise<string> {
    await this.userModel.deleteOne({ _id: id });
    return `O user de id = ${id}, foi deletado com sucesso`;
  }
}
