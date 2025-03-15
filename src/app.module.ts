import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './datebase/datebase.module';
import { ProductModule } from './product/product.module';
import { CommentModule } from './comment/comment.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [ConfigModule.forRoot({
    validationSchema : Joi.object({
      POSTGRES_HOST :Joi.string().required(), 
      POSTGRES_USER : Joi.string().required(), 
      POSTGRES_PASSWORD : Joi.string().required(), 
      POSTGRES_DB : Joi.string().required(), 
      POSTGRES_PORT: Joi.number().required(),
    })
  }), DatabaseModule, ProductModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
