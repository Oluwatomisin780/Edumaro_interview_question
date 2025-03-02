import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { CreateSubjectDto } from './subject.type';
import { SubjectService } from './subject.service';
import { Auth } from '../../common/decorator/auth.decorator';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}
  @Auth(['ADMIN'])
  @Post()
  async createSubject(@Body() createSubjectDto: CreateSubjectDto) {
    return await this.subjectService.createSubject(createSubjectDto);
  }
  @Auth()
  @Get()
  async getSubjects() {
    return await this.subjectService.getSubjects();
  }
  @Auth()
  @Get('/:id')
  async getSubject(@Param('id') id: string) {
    return await this.subjectService.getSubject(id);
  }
}
