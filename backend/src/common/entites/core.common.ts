import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import {Field} from '@nestjs/graphql';

@Entity()
export class CoreEntity{
	@PrimaryGeneratedColumn()
	@Field(type=>Number)
	id:number;

	@CreateDateColumn({
		type:"timestamp",
		name:"created_at"
	})
	@Field(type=>Date)
	createdAt:Date

	@UpdateDateColumn({
		type:"timestamp",
		name:"updated_at"
	})
	@Field(type=>Date)
	updatedAt:Date
}
