import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostComment } from './entities/postcomment.entity';
import { UserAnks } from './../auth/authenticationanks/entities/useranks.entity';

@Module({
  imports: [
  TypeOrmModule.forFeature([
      Post, PostComment, UserAnks
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule { }
