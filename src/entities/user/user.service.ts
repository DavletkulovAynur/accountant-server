import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { genSalt, hash } from 'bcrypt';
import { UpdateUserDto } from './dto/updateUser.dto';

//TODO: CRUD
// c - create
// r - read
// u - update
// d - delete

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

  public async getAllUsers() {
    return await this.userRepository.find({
      select: ['nameFirst', 'birthDate', 'email', 'gender', 'nameLast'],
    });
  }

  public async updateUserData(id: number, body: UpdateUserDto) {
    return await this.userRepository.update({ id }, body);
  }

  public async deleteUser(id: number) {
    //FIXME: возв ошибку что пользователь не найден
    return await this.userRepository.delete(id);
  }
}
