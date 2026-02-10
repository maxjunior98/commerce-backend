import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '1234',
    username: 'postgres',
    entities: [Customer],
    database: 'commerce'
    }), CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
