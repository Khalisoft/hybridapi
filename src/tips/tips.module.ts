import { Module } from '@nestjs/common';
import { TipsService } from './tips.service';
import { TipsController } from './tips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tip } from './entities/tip.entity';
import { TipComment } from './entities/tipcomment.entity';

@Module({
  imports:[
TypeOrmModule.forFeature([Tip,TipComment])
  ],
  controllers: [TipsController],
  providers: [TipsService]
})
export class TipsModule {}
