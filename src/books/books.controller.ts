import { Controller, Post, Get, Patch, Put, Res, Req, Body, HttpStatus, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('book_file'))
  async create(@UploadedFile() book_file: Express.Multer.File, @Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.booksService.createBook({book_file:book_file, ...data})
    )
  }

  // @UseInterceptors(FileInterceptor('profilePicture'))
  // async updateRiderProfilePicture(@UploadedFile() profilePicture: Express.Multer.File, @Body() data: any, @Req() req: Request, @Res() res: Response) {
  //   const updateProfile = await this.ridersService.updateRiderProfilePicture({
  //     rider_id:data.rider_id,
  //     profilePicture:profilePicture
  //   })
  //   return res.status(HttpStatus.OK).json(updateProfile)
  // }
  @Get('all')
  async getPosts(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.booksService.getBooks()
    )
  }
 
  @Get(':book_id')
  async getPost(@Body() data: any, @Param('book_id') book_id: number, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.booksService.getBook(book_id)
    )
  }
  // @Patch('bookmark/:post_id')
  // async bookmark(@Body() data: any, @Param('post_id') post_id: number, @Res() res: Response) {
  //   return res.status(HttpStatus.OK).json(
  //     await this.booksService.bookmarkPost({post_id:post_id, ...data})
  //   )
  // }
  // @Patch('unbookmark/:post_id')
  // async unbookmark(@Body() data: any, @Param('post_id') post_id: number, @Res() res: Response) {
  //   return res.status(HttpStatus.OK).json(
  //     await this.booksService.unbookmarkPost({post_id:post_id, ...data})
  //   )
  // }

  @Post('comment/:book_id')
  async commentpost(@Body() data: any, @Param('book_id') book_id: number, @Res() res: Response) {
    return res.status(HttpStatus.CREATED).json(
      await this.booksService.commentBook({book_id:book_id, ...data})
    )
  }
  @Get('comments/:book_id')
  async getpostComments(@Body() data: any, @Param('book_id') book_id: number, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(
      await this.booksService.getBookComments(book_id)
    )
  }
}
