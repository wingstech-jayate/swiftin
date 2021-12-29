import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class user
{
    @PrimaryGeneratedColumn()
    id:string
    @Column()
    username:string;
    @Column()
    password:string;
}