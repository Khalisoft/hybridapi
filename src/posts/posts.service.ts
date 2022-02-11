import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostComment } from './entities/postcomment.entity';
import { UserAnks } from './../auth/authenticationanks/entities/useranks.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postRepo: Repository<Post>,
        @InjectRepository(PostComment) private postCommentRepo: Repository<PostComment>,
        @InjectRepository(UserAnks) private userAnksRepo: Repository<UserAnks>,

    ){}
    async createPost(data:any) {
        return await this.postRepo.save(data)
    }
    async getPosts(data:any) {
        return await this.postRepo.find()
    }
    async getPost(post_id:number) {
        return await this.postRepo.findOne({where:{post_id:post_id}})
    }
    async commentPost(data:any) {
        return await this.postCommentRepo.save(data) 
    }
    async getPostComments(post_id:number) {
        return await this.postCommentRepo.find({where:{post_id:post_id}})
    }
    async bookmarkPost(data:any) {
        const {user_id, post_id} = data

        const {bookmarks} = await this.userAnksRepo.findOne({where:{user_id:user_id}})
        const newBookmarks = [...bookmarks, parseInt(post_id)]
        const filteredBookmarks = [...new Set(newBookmarks)]
        await this.userAnksRepo.update({user_id:user_id}, {bookmarks:filteredBookmarks})
        return 'Bookmarked'
    }
    async unbookmarkPost(data:any) {
        const {user_id, post_id} = data

        const {bookmarks} = await this.userAnksRepo.findOne({where:{user_id:user_id}})
        let newBookmarks = bookmarks.filter(el => el != parseInt(post_id));

        // const [post_id, ...newBookmarks] = bookmarks
        const filteredBookmarks = [...new Set(newBookmarks)]
        await this.userAnksRepo.update({user_id:user_id}, {bookmarks:filteredBookmarks})
        return 'Unbookmarked'
    }
    async getPostBookmarks(data:any) {
        
    }
}
