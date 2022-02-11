import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudinaryService } from './../cloudinary/cloudinary.service';
import { Book } from './entities/book.entity';
import { BookComment } from './entities/bookcomment.entity';

@Injectable()
export class BooksService {
    constructor(
        private cloudinaryService: CloudinaryService,
        @InjectRepository(Book) private booksRepo: Repository<Book>,
        @InjectRepository(BookComment) private bookCommentRepo: Repository<BookComment>,

    ) { }

    async createBook(data: any) {

        const { user_id, book_file } = data;
        const fileUpload = await this.cloudinaryService
            .uploadBook(book_file)
            .catch(
                () => { throw new BadRequestException('Invalid File Uploaded') }
            )

        const { secure_url } = fileUpload
        data.book_file = secure_url
        const { book_id } = await this.booksRepo.save(data )
        return { book_id: book_id }
    }
    async getBooks() {
        return await this.booksRepo.find()
    }
    async getBook(book_id: number) {
        return await this.booksRepo.findOne({where:{book_id:book_id}})
    }
    async commentBook(data: any) {
        return await this.bookCommentRepo.save(data)
    }
    async getBookComments(book_id: number) {
        return await this.bookCommentRepo.find({where:{book_id:book_id}})
    }

    // async createPost(data: any) {
    //     return await this.postRepo.save(data)
    // }
    // async getPosts(data: any) {
    //     return await this.postRepo.find()
    // }
    // async getPost(post_id: number) {
    //     return await this.postRepo.findOne({ where: { post_id: post_id } })
    // }
    // async commentPost(data: any) {
    //     return await this.postCommentRepo.save(data)
    // }
    // async getPostComments(data: any) {
    //     return await this.postCommentRepo.find()
    // }
    // async bookmarkPost(data: any) {
    //     const { user_id, post_id } = data

    //     const { bookmarks } = await this.userAnksRepo.findOne({ where: { user_id: user_id } })
    //     const newBookmarks = [...bookmarks, parseInt(post_id)]
    //     const filteredBookmarks = [...new Set(newBookmarks)]
    //     await this.userAnksRepo.update({ user_id: user_id }, { bookmarks: filteredBookmarks })
    //     return 'Bookmarked'
    // }
    // async unbookmarkPost(data: any) {
    //     const { user_id, post_id } = data

    //     const { bookmarks } = await this.userAnksRepo.findOne({ where: { user_id: user_id } })
    //     let newBookmarks = bookmarks.filter(el => el != parseInt(post_id));

    //     // const [post_id, ...newBookmarks] = bookmarks
    //     const filteredBookmarks = [...new Set(newBookmarks)]
    //     await this.userAnksRepo.update({ user_id: user_id }, { bookmarks: filteredBookmarks })
    //     return 'Unbookmarked'
    // }
}
