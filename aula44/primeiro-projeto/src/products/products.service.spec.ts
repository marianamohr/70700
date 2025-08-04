import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';

const mockProduct = {
  _id: '1',
  name: 'Test Product',
  description: 'This is a test product',
  price: 100,
  stock: 10,
};

const mockProductModel = {
  create: jest.fn().mockResolvedValue(mockProduct),
  find: jest.fn().mockResolvedValue([mockProduct]),
  findOne: jest.fn().mockResolvedValue(mockProduct),
  updateOne: jest.fn().mockResolvedValue({ modifiedCount: 1 }),
  deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }),
};

describe('ProductsService', () => {
  let service: ProductsService;
  let model: Model<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getModelToken(Product.name),
          useValue: mockProductModel,
        },
        ConfigService,
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    model = module.get<Model<Product>>(getModelToken(Product.name));
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
    it('should create a new product', async () => {
      const createProductDto: CreateProductDto = {
        name: 'Test Product',
        description: 'This is a test product',
        price: 100,
        stock: 10,
      };
      const result = await service.create(createProductDto);
      expect(result).toEqual(mockProduct);
      expect(model.create).toHaveBeenCalledWith(createProductDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await service.findAll();
      expect(result).toEqual([mockProduct]);
      expect(model.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single product', async () => {
      const result = await service.findOne('1');
      expect(result).toEqual(mockProduct);
      expect(model.findOne).toHaveBeenCalledWith({ _id: '1' });
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const updateProductDto: UpdateProductDto = { name: 'Updated Product' };
      const result = await service.update('1', updateProductDto);
      expect(result).toEqual({ modifiedCount: 1 });
      expect(model.updateOne).toHaveBeenCalledWith(
        { _id: '1' },
        updateProductDto,
      );
    });
  });

  describe('remove', () => {
    it('should remove a product', async () => {
      const result = await service.remove('1');
      expect(result).toEqual({ deletedCount: 1 });
      expect(model.deleteOne).toHaveBeenCalledWith({ _id: '1' });
    });
  });
});
