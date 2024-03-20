import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { AuthDto } from './dto';
import { User } from './entities/User.entity';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: AuthDto): Promise<User> {
    const user = await this.userRepository.findOneByEmail(dto.email);
    if (user) {
      throw new Error('EXIST User');
    }
    const hashedPassword = await argon2.hash(dto.password);
    return this.userRepository.createUser(dto, hashedPassword);
  }
}
