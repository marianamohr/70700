import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nome do Produto',
    example: 'Poney',
  })
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({
    description: 'Preço do Produto',
    example: 10.0,
  })
  price: number;

  @ApiProperty()
  stock: number;
}
