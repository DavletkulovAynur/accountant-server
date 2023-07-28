import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(userData: any) {
    const salt = await genSalt(1);
    const hashedPassword = await hash(userData.password, salt);
    const newUser = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });
    return await this.userRepository.save(newUser);
  }

  public async getUserData(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }
}
