import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

const mockUser = {
  _id: '1',
  first_name: 'Test User',
  last_name: 'Test User',
  email: 'test@example.com',
};

const mockUserModel = {
  create: jest.fn().mockResolvedValue(mockUser),
  find: jest.fn().mockResolvedValue([mockUser]),
  findOne: jest.fn().mockResolvedValue(mockUser),
  updateOne: jest.fn().mockResolvedValue({ modifiedCount: 1 }),
  deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }),
};

describe('UsersService', () => {
  let service: UsersService;
  let model: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        },
        ConfigService,
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get<Model<User>>(getModelToken(User.name));
  });
  describe('testing the service', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
    it('should be defined', () => {
      expect(model).toBeDefined();
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        first_name: 'Test User',
        last_name: 'Test User',
        email: 'test@example.com',
        cpf: '',
      };
      const result = await service.create(createUserDto);
      expect(result).toEqual(mockUser);
      expect(result._id).toEqual(`1`);
      expect(typeof result).toBe('object');
      expect(model.create).toHaveBeenCalledWith(createUserDto);
    });
    it('should return an error when try to add a user with an existent email', async () => {
      const createUserDto: CreateUserDto = {
        first_name: 'Test User',
        last_name: 'Test User',
        email: 'test@example.com',
        cpf: '',
      };
      const result = await service.create(createUserDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = await service.findAll();
      expect(result).toEqual([mockUser]);
      expect(typeof result).toBe('array');
      expect(model.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const result = await service.findOne('1');
      expect(result).toEqual(mockUser);
      expect(model.findOne).toHaveBeenCalledWith({ _id: '1' });
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateUserDto: UpdateUserDto = { first_name: 'Updated User' };
      const result = await service.update('1', updateUserDto);
      expect(result).toEqual(mockUser);
      expect(model.updateOne).toHaveBeenCalledWith({ _id: '1' }, updateUserDto);
      expect(model.findOne).toHaveBeenCalledWith({ _id: '1' });
    });
    it('erro ao tentar atualizar usuario q nao existe', async () => {
      // Arrange
      jest.spyOn(model, 'updateOne').mockResolvedValue({
        acknowledged: true,
        modifiedCount: 0,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 0,
      });
      const updateUserDto: UpdateUserDto = { first_name: 'Updated User' };

      // Act
      const result = await service.update('100', updateUserDto);

      // Assert
      expect(result).toEqual({ message: `User with _id 100 not found` });
      expect(model.updateOne).toHaveBeenCalledWith(
        { _id: '100' },
        updateUserDto,
      );
      expect(model.findOne).not.toHaveBeenCalledWith({ _id: '100' });
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const result = await service.remove('1');
      expect(result).toEqual({ deletedCount: 1 });
      expect(model.deleteOne).toHaveBeenCalledWith({ _id: '1' });
    });
  });
});
