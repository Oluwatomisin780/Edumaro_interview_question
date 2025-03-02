import { QuestionType } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsEnum(QuestionType)
  questionType: QuestionType;
  @IsString()
  question: string;
}

export class UpdateQuestionDto {
  @IsString()
  question: string;
}
