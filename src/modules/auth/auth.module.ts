import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from '../../common/strategies/local-auth.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'some_secret', //change  this later
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
