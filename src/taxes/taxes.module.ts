import { forwardRef, Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';
import { TaxesController } from './taxes.controller';
import { AuthenticationtpModule } from './../auth/authenticationtp/authenticationtp.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taxes } from './entities/taxes.entity';
import { UserTax } from './entities/user.tax.entity';
import { Payment } from './entities/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Taxes, UserTax, Payment]),
    forwardRef(() => AuthenticationtpModule),
  ],
  controllers: [TaxesController],
  providers: [TaxesService],
  exports: [TaxesService],
})
export class TaxesModule {}