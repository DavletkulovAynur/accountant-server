import { Injectable } from '@nestjs/common';
import { Accountant } from './accountant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OPERATION_TYPE } from './types';

@Injectable()
export class AccountantService {
  constructor(
    @InjectRepository(Accountant)
    private readonly accountantRepository: Repository<Accountant>,
  ) {}

  public async createOperation(newOperation) {
    return await this.accountantRepository.save(newOperation);
  }

  public async getAllOperations() {
    return await this.accountantRepository.find();
  }

  public async getAllExpenceOperations() {
    return await this.findTransactions(OPERATION_TYPE.Expence);
  }

  public async getAllIncomeOperations() {
    return await this.findTransactions(OPERATION_TYPE.Income);
  }

  public async deleteOperation(body) {
    const { operationId } = body;
    return await this.accountantRepository.delete(operationId);
  }

  public async editOperation() {
    // return await this.findTransactions(OPERATION_TYPE.Income);
  }

  async findTransactions(type: OPERATION_TYPE): Promise<Accountant[]> {
    return this.accountantRepository.find({
      where: { operationType: type },
    });
  }
}
