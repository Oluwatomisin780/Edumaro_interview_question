import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { PrismaModule } from '../../services/prisma/prisma.module';
import { JwtStrategy } from '../../common/strategies/jwt-auth.strategy';

@Module({
  imports: [PrismaModule],
  providers: [SubjectService, JwtStrategy],
  controllers: [SubjectController],
})
export class SubjectModule {}
