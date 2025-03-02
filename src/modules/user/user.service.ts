import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { CreateUserDto } from './user.type';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findOne(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new NotFoundException('User Does not exist');
    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 12);
    const newUser = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashPassword,
      },
    });

    const { password, ...result } = newUser;
    return result;
  }
}
