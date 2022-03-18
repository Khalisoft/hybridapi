import {
  Controller,
  Post,
  Get,
  Patch,
  Put,
  Res,
  Req,
  Body,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TaxesService } from './taxes.service';

@Controller('taxes')
export class TaxesController {
  constructor(private readonly taxesService: TaxesService) {}

  @Post('create')
  async createTax(
    @Body() data: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.createTax(data));
  }

  @Get('all')
  async getAllTax(@Req() req: Request, @Res() res: Response) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.getAllTaxes());
  }

  @Get('user/all')
  async getAllUsersTax(@Req() req: Request, @Res() res: Response) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.getAllUsersTax());
  }

  @Get('user/:user_id')
  async getAllUserTaxes(
    @Param('user_id') user_id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.taxesService.getUserTaxes(user_id));
  }
  @Get('payments/:user_id')
  async getAllUserPayments(
    @Param('user_id') user_id: number,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.taxesService.getUserPayments(user_id));
  }
  @Get('payments')
  async getAllPayments(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .json(await this.taxesService.getAllPayments());
  }

  @Post('pay')
  async payTax(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.payTax(data));
  }
  @Post('activate')
  async activateTax(
    @Body() data: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.activateTax(data));
  }
  @Post('deactivate')
  async deactivateTax(
    @Body() data: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.deactivateTax(data));
  }
  @Post('remove')
  async removeTax(
    @Body() data: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.removeTax(data));
  }

  @Post('reset')
  async resetTaxes(
    @Body() data: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.taxesService.resetTaxes());
  }
}
