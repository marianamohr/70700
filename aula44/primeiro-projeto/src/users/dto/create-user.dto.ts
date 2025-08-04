import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty({
    description: 'CPF do usuario',
    example: '051.047.125-00',
  })
  cpf: string;
}
