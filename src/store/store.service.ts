import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {

  constructor(@InjectRepository(Store) private readonly storeRepository: Repository<Store>){}

  create(createStoreDto: CreateStoreDto): Promise<Store> {
    const store: Store = new Store()
    store.store_name = createStoreDto.store_name
    store.store_login = createStoreDto.store_login
    store.store_password = createStoreDto.store_password
    return this.storeRepository.save(store);
  }

  findAll(): Promise<Store[]> {
    return this.storeRepository.find();
  }

  findOne(id: number): Promise<Store | null> {
    return this.storeRepository.findOneBy({store_id: id});
  }

  update(id: number, updateStoreDto: UpdateStoreDto): Promise<Store> {
    const store: Store = new Store()
    store.store_login = updateStoreDto.store_login
    store.store_name = updateStoreDto.store_name
    store.store_password = updateStoreDto.store_password
    store.store_id = id
    return this.storeRepository.save(store);
  }

  remove(id: number) {
    return this.storeRepository.delete({store_id: id});
  }
}
