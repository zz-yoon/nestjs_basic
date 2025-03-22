import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}
  
  //회원가입 로직 
  async signupUser(createUserDto : CreateUserDto) : Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  
 
}
