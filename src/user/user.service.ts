import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 유저를 생성하는 로직 
  async createUser(createUserDto : CreateUserDto) : Promise<User> {
    const newUser : User = await this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async getUserById(id: string) : Promise<User> {
    const user: User  | null  = await this.userRepository.findOneBy({id});
    if(!user){
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async getUserByEmail(email : string) : Promise<User> {
    const user : User  | null = await this.userRepository.findOneBy({email}); 
    if(!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }


}
