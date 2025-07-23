import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    if (
      !createUserDto.first_name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new HttpException('Incomplete Values', HttpStatus.BAD_REQUEST);
    }
    const newUser = this.usersService.create(createUserDto);
    return { status: 'success', data: newUser };
  }

  @Get()
  findAll(@Query('limit') limit) {
    console.log(limit);
    const users = this.usersService.findAll();
    return { status: 'success', data: users };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (isNaN(+id)) {
      throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST);
    }
    const user = this.usersService.findOne(+id);
    return { status: 'success', data: user };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const newUser = this.usersService.update(+id, updateUserDto);
    return { status: 'success', data: newUser };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
