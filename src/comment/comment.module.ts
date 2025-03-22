import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { ProductModule } from 'src/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';

@Module({
  imports :  [TypeOrmModule.forFeature([Comment]), ProductModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
