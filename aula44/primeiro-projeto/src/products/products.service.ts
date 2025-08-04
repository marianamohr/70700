import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private config: ConfigService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  async findAll() {
    const allProducts = await this.productModel.find();
    return allProducts;
  }

  async findOne(id: string) {
    const product = await this.productModel.findOne({
      _id: id,
    });
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.updateOne(
      {
        _id: id,
      },
      updateProductDto,
    );
    return product;
  }

  async remove(id: string) {
    const product = await this.productModel.deleteOne({
      _id: id,
    });
    if (product.deletedCount === 0) {
      throw new Error('Product not found');
    } else {
      return product;
    }
    return product;
  }
}
