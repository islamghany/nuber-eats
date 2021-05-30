import {Field,ObjectType} from '@nestjs/graphql';
import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm'
@ObjectType()
@Entity('resturant')
export class Resturant{
	
	@Field(type=>Number)
	@PrimaryGeneratedColumn()
	id:number;

	@Field(type => String)
	@Column()
	name:string;

	@Field(type => Boolean, {nullable:true})
	@Column()
	isGood?:boolean;
}