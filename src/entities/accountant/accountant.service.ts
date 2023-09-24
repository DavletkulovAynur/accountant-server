import { Injectable } from '@nestjs/common';
import { Accountant } from './accountant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountantService {
  constructor(
    @InjectRepository(Accountant)
    private readonly accountantRepository: Repository<Accountant>,
  ) {}

  public async createOperation(newOperation) {
    return await this.accountantRepository.save(newOperation);
  }

  public async getAllExpenceOperations() {
    return await this.accountantRepository.find();
  }
}
