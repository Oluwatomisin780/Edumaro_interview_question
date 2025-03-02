import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { CreateSubjectDto } from './subject.type';

@Injectable()
export class SubjectService {
  constructor(private prismaService: PrismaService) {}

  async createSubject(createSubjectDto: CreateSubjectDto) {
    return await this.prismaService.subject.create({
      data: {
        ...createSubjectDto,
      },
    });
  }

  async getSubjects() {
    return await this.prismaService.subject.findMany();
  }

  async getSubject(id: string) {
    return await this.prismaService.subject.findUnique({ where: { id } });
  }
}
