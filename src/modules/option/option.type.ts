import { IsBoolean, IsString } from 'class-validator';

export class OPtionDto {
  @IsString()
  option: string;
  @IsBoolean()
  is_correct: boolean;
}

export class UpdateOptionDto {
  @IsString()
  option?: string;
  @IsBoolean()
  is_correct?: boolean;
}
