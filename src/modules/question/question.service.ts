import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { CloudinaryService } from '../../services/cloudinary/cloudinary.service';
import { CreateQuestionDto, UpdateQuestionDto } from './question.type';
import { Console } from 'console';

@Injectable()
export class QuestionService {
  constructor(
    private prismaService: PrismaService,
    private cloudinaryService: CloudinaryService,
  ) {}
  async createQuestion(
    createQuestionDto: CreateQuestionDto,
    file: Express.Multer.File,
    subjectId: string,
  ) {
    if (file) {
      const fileData = await this.cloudinaryService.uploadFile(file);
      console.log(fileData.url);
      const question = await this.prismaService.question.create({
        data: {
          ...createQuestionDto,
          fileUrl: fileData.url,
          subjectId,
        },
      });
      return question;
    }
    throw new BadRequestException();
  }

  async getQuestionBySubject(subjectId: string) {
    return await this.prismaService.question.findMany({
      where: {
        subjectId,
      },
      include: {
        options: true,
      },
    });
  }
  async getQuestion(id: string) {
    return await this.prismaService.question.findUnique({
      where: {
        id,
      },
    });
  }
  async updateQuestion(
    updateQuestionDto: UpdateQuestionDto,
    questionId: string,
  ) {
    return await this.prismaService.question.update({
      where: {
        id: questionId,
      },
      data: {
        question: updateQuestionDto.question,
      },
    });
  }
}
