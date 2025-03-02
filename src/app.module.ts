import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './services/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

import { QuestionModule } from './modules/question/question.module';
import { SubjectModule } from './modules/subject/subject.module';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryModule } from './services/cloudinary/cloudinary.module';
import { OptionModule } from './modules/option/option.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    QuestionModule,
    SubjectModule,
    MulterModule.register({
      dest: './uploads',
    }),
    CloudinaryModule,
    OptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
