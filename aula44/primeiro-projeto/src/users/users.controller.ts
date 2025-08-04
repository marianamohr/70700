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
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  private readonly logger = new Logger(UsersController.name);

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 201, description: 'The created user', type: User })
  @ApiResponse({ status: 400, description: 'Email duplicado' })
  async create(@Body() createUserDto: CreateUserDto) {
    this.logger.debug('Entrei na func de criar user ');
    if (!createUserDto.first_name || !createUserDto.email) {
      throw new HttpException('Incomplete Values', HttpStatus.BAD_REQUEST);
    }
    const newUser = await this.usersService.create(createUserDto);

    return { status: 'success', data: newUser };
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of users', type: [User] })
  async findAll(@Query('limit') limit) {
    console.log(limit);
    const users = await this.usersService.findAll();
    console.log(users);
    return { status: 'success', data: users };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiParam({
    name: 'id',
    description: 'MongoDB ObjectId (24-character hex string)',
    example: '64cbeab6e6d4b1e0d0894d77', // exemplo de um ObjectId válido
  })
  @ApiResponse({ status: 200, description: 'The found user', type: User })
  async findOne(@Param('id') id: string) {
    // 24 characteres
    //if (id.length !== 24) {
    // throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST);
    // }
    const user = await this.usersService.findOne(id);
    return { status: 'success', data: user };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiParam({
    name: 'id',
    description: 'MongoDB ObjectId (24-character hex string)',
    example: '64cbeab6e6d4b1e0d0894d77', // exemplo de um ObjectId válido
  })
  @ApiResponse({ status: 201, description: 'The created user', type: User })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const newUser = await this.usersService.update(id, updateUserDto);
    return { status: 'success', data: newUser };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiParam({
    name: 'id',
    description: 'MongoDB ObjectId (24-character hex string)',
    example: '64cbeab6e6d4b1e0d0894d77', // exemplo de um ObjectId válido
  })
  @ApiResponse({ status: 201, description: 'The created user', type: User })
  async remove(@Param('id') id: string) {
    const userDeleted = await this.usersService.remove(id);
    return { status: 'success', data: userDeleted };
  }
}
