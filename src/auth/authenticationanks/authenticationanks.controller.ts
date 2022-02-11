import { Controller, Post, Get, Patch, Put, Res, Req, Body, HttpStatus, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticationanksService } from './authenticationanks.service';

@Controller('authenticationanks')
export class AuthenticationanksController {
  constructor(private readonly authenticationanksService: AuthenticationanksService) { }

  @Post('signup')
  async signup(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.authenticationanksService.signup(data)
    )
  }

  @Post('signin')
  async signin(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationanksService.signin(data)
    )
  }

  @Get('profile/:user_id')
  async profile(@Body() data: any, @Param('user_id') user_id: number, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationanksService.getUser(user_id)
    )
  }
}
