import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasemoduleModule } from './databasemodule/databasemodule.module';
import { AuthenticationfhtsModule } from './auth/authenticationfhts/authenticationfhts.module';
import { AuthenticationanksModule } from './auth/authenticationanks/authenticationanks.module';
import { AuthenticationonsModule } from './auth/authenticationons/authenticationons.module';
import { TipsModule } from './tips/tips.module';
import { PostsModule } from './posts/posts.module';
import { BooksModule } from './books/books.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AuthenticationtpModule } from './auth/authenticationtp/authenticationtp.module';
import { TaxesModule } from './taxes/taxes.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ['.env'] }), DatabasemoduleModule, AuthenticationfhtsModule, AuthenticationanksModule, AuthenticationonsModule, TipsModule, PostsModule, BooksModule, CloudinaryModule, AuthenticationtpModule, TaxesModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
