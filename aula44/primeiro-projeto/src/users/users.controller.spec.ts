import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUsersService = {
    create: jest.fn((dto) => ({
      id: '1',
      ...dto,
    })),
    findAll: jest.fn(() => [
      {
        id: '1',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
      },
    ]),
    findOne: jest.fn((id) => ({
      id,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
    })),
    update: jest.fn((id, dto) => ({ id, ...dto })),
    remove: jest.fn((id) => ({ id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      // arange
      const dto: CreateUserDto = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        cpf: '051.154.215-00',
      };
      // act
      const result = await controller.create(dto);
      // assert
      expect(result).toEqual({
        status: 'success',
        data: { id: '1', ...dto },
      });
      expect(service.create).toHaveBeenCalledWith(dto);
    });

    it('should throw an exception if incomplete values are provided', async () => {
      const dto: CreateUserDto = {
        first_name: '',
        last_name: 'Doe',
        email: '',
        cpf: '',
      };
      await expect(controller.create(dto)).rejects.toThrow(
        new HttpException('Incomplete Values', HttpStatus.BAD_REQUEST),
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      expect(await controller.findAll(null)).toEqual({
        status: 'success',
        data: [
          {
            id: '1',
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@example.com',
          },
        ],
      });
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      const id = '1';
      expect(await controller.findOne(id)).toEqual({
        status: 'success',
        data: {
          id,
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@example.com',
        },
      });
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const id = '1';
      const dto: UpdateUserDto = {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane@example.com',
      };
      expect(await controller.update(id, dto)).toEqual({
        status: 'success',
        data: { id, ...dto },
      });
      expect(service.update).toHaveBeenCalledWith(id, dto);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const id = '1';
      expect(await controller.remove(id)).toEqual({ id });
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
});
