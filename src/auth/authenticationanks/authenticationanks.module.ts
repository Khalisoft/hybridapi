import { Module } from '@nestjs/common';
import { AuthenticationanksService } from './authenticationanks.service';
import { AuthenticationanksController } from './authenticationanks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAnks } from './entities/useranks.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserAnks])
  ],
  controllers: [AuthenticationanksController],
  providers: [AuthenticationanksService]
})
export class AuthenticationanksModule { }
