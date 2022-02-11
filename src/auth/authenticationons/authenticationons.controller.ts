import { Controller, Post, Get, Patch, Put, Res, Req, Body, HttpStatus, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticationonsService } from './authenticationons.service';

@Controller('authenticationons')
export class AuthenticationonsController {
  constructor(private readonly authenticationonsService: AuthenticationonsService) {}

  @Post('signup')
  async signup(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.authenticationonsService.signup(data)
    )
  }

  @Post('signin')
  async signin(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationonsService.signin(data)
    )
  }

  @Get('profile/:user_id')
  async profile(@Body() data: any, @Param('user_id') user_id: number, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationonsService.getUser(user_id)
    )
  }
}
