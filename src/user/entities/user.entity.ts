import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    public id: string;
    
    //유저 이름 
    @Column() 
    public name : string; 
    //유저 이메일 
    @Column({unique : true}) 
    public email: string;
    //유저 패스워드 
    @Column()
    public password: string;
    //프로필 이미지
    @Column() 
    public profileImage: string;
    //프로바이더
}
