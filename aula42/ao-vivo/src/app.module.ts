import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './usecases/users/users.module';
import { ProductsModule } from './usecases/products/products.module';
import { CartModule } from './usecases/cart/cart.module';

@Module({
  imports: [UsersModule, ProductsModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
