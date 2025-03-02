import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';

import { PrismaModule } from '../../services/prisma/prisma.module';
import { JwtStrategy } from '../../common/strategies/jwt-auth.strategy';

@Module({
  imports: [PrismaModule],
  providers: [OptionService, JwtStrategy],
  controllers: [OptionController],
})
export class OptionModule {}
