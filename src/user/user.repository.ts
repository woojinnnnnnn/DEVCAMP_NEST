import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDto } from '../auth/dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    return this.repo.findOneBy({ email });
  }

  async createUser(dto: AuthDto, hashedPassword: string): Promise<User> {
    const user = new User();
    user.name = dto.name;
    user.email = dto.email;
    user.password = hashedPassword;
    user.phone = dto.phone;
    // user.role = dto.role;
    return this.repo.save(user);
  }
}
