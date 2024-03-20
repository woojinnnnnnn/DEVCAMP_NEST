import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

//   @Post('sign-up')
//   signUp(@Body() dto: AuthDto) {
//     return this.userService.signUp();
//   }
}
