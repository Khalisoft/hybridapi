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
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create')
  async create(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.postsService.createPost(data));
  }
  @Get('all')
  async getPosts(@Body() data: any, @Req() req: Request, @Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .json(await this.postsService.getPosts(data));
  }

  @Get(':post_id')
  async getPost(
    @Body() data: any,
    @Param('post_id') post_id: number,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.postsService.getPost(post_id));
  }
 
  @Delete(':post_id')
  async deletePost(
    @Body() data: any,
    @Param('post_id') post_id: number,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.postsService.deletePost(post_id));
  }

  @Patch('bookmark/:post_id')
  async bookmark(
    @Body() data: any,
    @Param('post_id') post_id: number,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(
        await this.postsService.bookmarkPost({ post_id: post_id, ...data }),
      );
  }
  @Patch('unbookmark/:post_id')
  async unbookmark(
    @Body() data: any,
    @Param('post_id') post_id: number,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(
        await this.postsService.unbookmarkPost({ post_id: post_id, ...data }),
      );
  }

  @Post('comment/:post_id')
  async commentpost(
    @Body() data: any,
    @Param('post_id') post_id: number,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.postsService.commentPost({ post_id: post_id, ...data }));
  }
  @Get('comments/:post_id')
  async getpostComments(
    @Body() data: any,
    @Param('post_id') post_id: number,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.postsService.getPostComments(post_id));
  }
  
  @Get('user/all')
  async getUserPosts(
    @Body() data: any,
    @Res() res: Response,
  ) { 
    return res
      .status(HttpStatus.OK)
      .json(await this.postsService.getUserPosts(data));
  // return data
  }
}
