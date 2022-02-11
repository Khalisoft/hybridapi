import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { CloudinaryModule } from './../cloudinary/cloudinary.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BookComment } from './entities/bookcomment.entity';

@Module({
  imports:[
TypeOrmModule.forFeature([Book, BookComment]), CloudinaryModule
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
