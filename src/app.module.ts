import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { StoreModule } from './store/store.module';
import { Store } from './store/entities/store.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '1234',
    username: 'postgres',
    entities: [Customer, Store, Product],
    database: 'commerce'
    }), CustomerModule, StoreModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
