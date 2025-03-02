import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';

import { CloudinaryModule } from '../../services/cloudinary/cloudinary.module';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { JwtStrategy } from '../../common/strategies/jwt-auth.strategy';

@Module({
  imports: [PrismaModule, CloudinaryModule],
  providers: [QuestionService, JwtStrategy],
  controllers: [QuestionController],
})
export class QuestionModule {}
