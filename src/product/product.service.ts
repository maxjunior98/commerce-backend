import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>){}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product: Product =  new Product()
    product.product_name = createProductDto.product_name;
    product.product_description = createProductDto.product_description;
    product.product_price = createProductDto.product_price
    product.store_owner_id = createProductDto.store_owner_id;
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({product_id: id});
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product: Product = new Product();
    product.product_name = updateProductDto.product_name;
    product.product_description = updateProductDto.product_description;
    product.product_price = updateProductDto.product_price;
    product.store_owner_id = updateProductDto.store_owner_id;
    product.product_id = id;
    return this.productRepository.save(product);
  }

  remove(id: number) {
    return this.productRepository.delete({product_id: id});
  }
}
