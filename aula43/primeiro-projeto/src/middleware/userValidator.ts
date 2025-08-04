import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class UserValidator implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} at ${req.url} validando o body`);
    const createUserDto = req.body;
    if (
      !createUserDto.first_name ||
      !createUserDto.email ||
      !createUserDto.last_name
    ) {
      console.log(`Erro ao validar dados do body`);
      throw new HttpException('Incomplete Values', HttpStatus.BAD_REQUEST);
    }
    next();
  }
}
