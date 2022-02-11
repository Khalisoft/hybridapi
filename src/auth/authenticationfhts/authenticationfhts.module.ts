import { Module } from '@nestjs/common';
import { AuthenticationfhtsService } from './authenticationfhts.service';
import { AuthenticationfhtsController } from './authenticationfhts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFhts } from './entities/userfhts.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserFhts])
  ],
  controllers: [AuthenticationfhtsController],
  providers: [AuthenticationfhtsService]
})
export class AuthenticationfhtsModule {}
