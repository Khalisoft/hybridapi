import { Controller, Post, Get, Patch, Put, Res, Req, Body, HttpStatus, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthenticationtpService } from './authenticationtp.service';

@Controller('authenticationtp')
export class AuthenticationtpController {
  constructor(private readonly authenticationtpService: AuthenticationtpService) {}

  @Post('signup')
  async signup(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.authenticationtpService.signup(data)
    )
  }

  @Post('signin')
  async signin(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationtpService.signin(data)
    )
  }

  @Get('users/all')
  async getUsers(@Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationtpService.getAllUsers()
    )
  }
  
  @Get('profile/:user_id')
  async profile(@Body() data: any, @Param('user_id') user_id: number, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.authenticationtpService.getUser(user_id)
    )
  }
}