import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './entities/pet.entity';
import { Model } from 'mongoose';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<Pet>) {}

  async create(createPetDto: CreatePetDto) {
    try {
      const pet = await this.petModel.create(createPetDto);
      return pet;
    } catch (error) {
      throw new Error(`Impossivel cadastrar pet: ${error.message}`);
    }
  }

  findAll() {
    return `This action returns all pets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
