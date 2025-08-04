import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet } from './entities/pet.entity';
import { petSchema } from './schema/pet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pet.name,
        schema: petSchema,
      },
    ]),
  ],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
