import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { User } from 'src/auth/entities/User.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
//   constructor(private readonly usreRepository: Repository<User>) {}

//   async signUp(dto: AuthDto) {
//     const user = await this.usreRepository.findOne(dto.email);

//     const hashedPassword = await argon2.hash(dto.password);
//   }
}
