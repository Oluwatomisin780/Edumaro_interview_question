import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { OPtionDto, UpdateOptionDto } from './option.type';

@Injectable()
export class OptionService {
  constructor(private prismaService: PrismaService) {}
  async createOption(optionDto: OPtionDto, questionId: string) {
    return await this.prismaService.options.create({
      data: {
        ...optionDto,
        questionId,
      },
    });
  }
  async updateOption(updateOptionDto: UpdateOptionDto, id: string) {
    return await this.prismaService.options.update({
      where: { id },
      data: {
        ...updateOptionDto,
      },
    });
  }
  async deleteOption(id: string) {
    await this.prismaService.options.delete({ where: { id } });

    return {
      message: 'option successfully deleted',
    };
  }
}
