import { Controller, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { OptionService } from './option.service';
import { OPtionDto, UpdateOptionDto } from './option.type';
import { Auth } from '../../common/decorator/auth.decorator';

@Controller('option')
export class OptionController {
  constructor(private optionService: OptionService) {}
  @Auth(['ADMIN'])
  @Post('/:questionId')
  async createOption(
    @Body() optionDto: OPtionDto,
    @Param('questionId') questionId: string,
  ) {
    return await this.optionService.createOption(optionDto, questionId);
  }
  @Auth(['ADMIN'])
  @Put('/:id')
  async updateOption(
    @Body() updateOptionDto: UpdateOptionDto,
    @Param('id') id: string,
  ) {
    return await this.optionService.updateOption(updateOptionDto, id);
  }
  @Auth(['ADMIN'])
  @Delete('/:id')
  async deleteOption(@Param('id') id: string) {
    return await this.optionService.deleteOption(id);
  }
}
