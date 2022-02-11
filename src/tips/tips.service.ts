import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tip } from './entities/tip.entity';
import { TipComment } from './entities/tipcomment.entity';

@Injectable()
export class TipsService {
    constructor(
        @InjectRepository(Tip) private tipsRepo: Repository<Tip>,
        @InjectRepository(TipComment) private tipCommentRepo: Repository<TipComment>,
    ){}
    async createTip(data: any) {
        return await this.tipsRepo.save(data)
    }
    async getTips(data: any) {
        return await this.tipsRepo.find()
    }
    async getTip(tip_id: number) {
        return await this.tipsRepo.findOne({where:{tip_id:tip_id}})
    }
    async commentTip(data: any) {
        return await this.tipCommentRepo.save(data)
    }
    async getTipComments(tip_id: number) {
        return await this.tipCommentRepo.find({where:{tip_id:tip_id}})
    }
}
