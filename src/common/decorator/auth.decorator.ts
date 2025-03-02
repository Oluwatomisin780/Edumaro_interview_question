import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from './role.docorator';
import { RolesGuard } from '../guards/role-auth.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

export const Auth = (roles?: Role[]) => {
  if (!roles?.length) return applyDecorators(UseGuards(JwtAuthGuard));
  return applyDecorators(Roles(...roles), UseGuards(JwtAuthGuard, RolesGuard));
};
