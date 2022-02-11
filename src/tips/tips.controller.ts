import { Controller, Post, Get, Patch, Put, Res, Req, Body, HttpStatus, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { TipsService } from './tips.service';

@Controller('tips')
export class TipsController {
  constructor(private readonly tipsService: TipsService) { }

  @Post('create')
  async create(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.tipsService.createTip(data)
    )
  }
  @Get('all')
  async getTips(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.tipsService.getTips(data)
    )
  }
 
  @Get(':tip_id')
  async getTip(@Body() data: any, @Param('tip_id') tip_id: number, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.tipsService.getTip(tip_id)
    )
  }
  // @Post('tip/bookmark/:tip_id')
  // async bookmark(@Body() data: any, @Param('tip_id') tip_id: number, @Res() res: Response) {
  //   return res.status(HttpStatus.CREATED).json(
  //     await this.tipsService.bookmarkTip(data)
  //   )
  // }

  @Post('comment/:tip_id')
  async commentTip(@Body() data: any, @Param('tip_id') tip_id: number, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.tipsService.commentTip({tip_id:tip_id, ...data})
    )
  }
  @Get('comments/:tip_id')
  async getTipComments(@Body() data: any, @Param('tip_id') tip_id: number, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.tipsService.getTipComments(tip_id)
    )
  }
}