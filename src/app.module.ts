import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { StoreModule } from './store/store.module';
import { Store } from './store/entities/store.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '1234',
    username: 'postgres',
    entities: [Customer, Store],
    database: 'commerce'
    }), CustomerModule, StoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
