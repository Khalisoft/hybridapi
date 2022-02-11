import { Controller, Post, Get, Patch, Put, Res, Req, Body, HttpStatus, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticationfhtsService } from './authenticationfhts.service';

@Controller('authenticationfhts')
export class AuthenticationfhtsController {
  constructor(private readonly authenticationfhtsService: AuthenticationfhtsService) {}
  @Post('signup')
  async signup(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.authenticationfhtsService.signup(data)
    )
  }

  @Post('signin')
  async signin(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationfhtsService.signin(data)
    )
  }

  @Get('profile/:user_id')
  async profile(@Body() data: any, @Param('user_id') user_id: number, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationfhtsService.getUser(user_id)
    )
  }
}
