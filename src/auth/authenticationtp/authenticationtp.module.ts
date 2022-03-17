import { Module, forwardRef } from '@nestjs/common';
import { AuthenticationtpService } from './authenticationtp.service';
import { AuthenticationtpController } from './authenticationtp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTp } from './entities/usertp.entity';
import { TaxesModule } from './../../taxes/taxes.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserTp]), TaxesModule],
  controllers: [AuthenticationtpController],
  providers: [AuthenticationtpService],
  exports: [AuthenticationtpService],
})
export class AuthenticationtpModule {}
