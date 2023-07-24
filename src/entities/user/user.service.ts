import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(userData: any) {
    console.log('userData', userData);
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }
}
