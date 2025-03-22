import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from '../../comment/entities/comment.entity';

@Entity()
export class Product {
 @PrimaryGeneratedColumn('uuid')
 public id: string;

 @Column()
 public name : string;

 @Column()
 public description : string; 

 @Column()
 public price : number;

 @Column() 
 public imageUrl : string;

 
 @OneToMany(() => Comment, (comment) => comment.product, {
    eager: true,
    cascade: true,
  })
  public comments: Comment[];

}
