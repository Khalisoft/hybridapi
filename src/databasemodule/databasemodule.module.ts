import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './../posts/entities/post.entity';
import { Tip } from './../tips/entities/tip.entity';
import { Book } from './../books/entities/book.entity';
import { UserAnks } from './../auth/authenticationanks/entities/useranks.entity';
import { UserFhts } from './../auth/authenticationfhts/entities/userfhts.entity';
import { UserOns } from './../auth/authenticationons/entities/userons.entity';
import { TipComment } from './../tips/entities/tipcomment.entity';
import { PostComment } from './../posts/entities/postcomment.entity';
import { BookComment } from './../books/entities/bookcomment.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        url: process.env.POSTGRES_URL,
        entities: [__dirname + '/../**/*/.entity.ts', Post, Tip, Book, UserAnks, UserFhts, UserOns, TipComment, PostComment, BookComment],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabasemoduleModule { }