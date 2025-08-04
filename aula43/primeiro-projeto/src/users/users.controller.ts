import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  //HttpException,
  // HttpStatus,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    /* if (
      !createUserDto.first_name ||
      !createUserDto.email ||
      !createUserDto.last_name
    ) {
      throw new HttpException('Incomplete Values', HttpStatus.BAD_REQUEST);
    }*/
    const newUser = await this.usersService.create(createUserDto);
    // console.log(newUser);
    return { status: 'success', data: newUser };
  }

  @Get()
  async findAll(@Query('limit') limit) {
    const users = await this.usersService.findAll(+limit);
    //console.log(users);
    return { status: 'success', data: users };
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return { status: 'success', data: user };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const newUser = await this.usersService.update(id, updateUserDto);
    return { status: 'success', data: newUser };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
