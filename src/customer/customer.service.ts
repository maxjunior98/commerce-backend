import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>
  ){}

  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer: Customer =  new Customer();
    customer.customer_name =  createCustomerDto.customer_name;
    customer.customer_email = createCustomerDto.customer_email;
    customer.customer_password = createCustomerDto.customer_password;
    return this.customerRepository.save(customer);
  }

  findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  findOne(id: number): Promise<Customer | null> {
    return this.customerRepository.findOneBy({ customer_id: id });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const customer: Customer = new Customer()
    customer.customer_id = id
    customer.customer_name = updateCustomerDto.customer_name
    customer.customer_email = updateCustomerDto.customer_email
    customer.customer_password = updateCustomerDto.customer_password
    return this.customerRepository.save(customer);
  }

  remove(id: number) {
    return this.customerRepository.delete({customer_id: id});
  }
}
