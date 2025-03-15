import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatebaseModule } from './datebase/datebase.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), DatebaseModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
