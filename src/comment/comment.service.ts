import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';


@Injectable()
export class CommentService {
  constructor(   
  @InjectRepository(Comment)
  private readonly commentRepository: Repository<Comment>,
  private readonly productService: ProductService,
) {}
 
async createComment(
  productId: string,
  createCommentDto: CreateCommentDto,
): Promise<any> {
  const { content } = createCommentDto;
  
  const product = await this.productService.getProductById(productId);

  console.log('+++++++++++', product);

  if (!product) {
    throw new NotFoundException('Product not found');
  }

  const newComment = this.commentRepository.create({ content, product });
  const savedComment = await this.commentRepository.save(newComment);
  (savedComment as any).product = { id: savedComment.product.id };

  return savedComment;
}
}
