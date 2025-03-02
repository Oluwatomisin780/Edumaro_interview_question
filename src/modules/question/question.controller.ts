import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  Put,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateQuestionDto, UpdateQuestionDto } from './question.type';
import { Auth } from '../../common/decorator/auth.decorator';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Auth(['ADMIN'])
  @Post('/:subjectId')
  @UseInterceptors(FileInterceptor('file'))
  async createQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
    @Param('subjectId') subjectId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    return await this.questionService.createQuestion(
      createQuestionDto,
      file,
      subjectId,
    );
  }
  @Auth()
  @Get('/:subjectId')
  async getQuestionBySubject(@Param('subjectId') subjectId: string) {
    return await this.questionService.getQuestionBySubject(subjectId);
  }
  @Auth()
  @Get('get-question/:id')
  async getQuestion(@Param('id') id: string) {
    return await this.questionService.getQuestion(id);
  }
  @Auth(['ADMIN'])
  @Put('/:questionId')
  async updateQuestion(
    @Body() updateQuestionDto: UpdateQuestionDto,
    @Param('questionId') questionId: string,
  ) {
    return await this.questionService.updateQuestion(
      updateQuestionDto,
      questionId,
    );
  }
}
