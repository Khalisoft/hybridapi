import { Module } from '@nestjs/common';
import { AuthenticationonsService } from './authenticationons.service';
import { AuthenticationonsController } from './authenticationons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOns } from './entities/userons.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserOns])
  ],
  controllers: [AuthenticationonsController],
  providers: [AuthenticationonsService]
})
export class AuthenticationonsModule { }
