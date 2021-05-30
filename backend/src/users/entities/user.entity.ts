import {Entity,Column,BeforeInsert} from 'typeorm';
import {CoreEntity} from '../../common/entites/core.common';
import {Field,ObjectType,InputType,registerEnumType} from '@nestjs/graphql';
import {InternalServerErrorException} from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
enum UserRole {
	Client,
	Owner,
	Delivery
}

registerEnumType(UserRole,{name:"UserRole"});

@InputType({isAbstract:true})
@ObjectType()
@Entity()
export class User extends CoreEntity{

	@Column()
	@Field(type=>String)
	email:string

	@Field(type=>String)
	@Column()
	password:string;

	@Field(type=>UserRole)
	@Column({type:'enum',enum:UserRole})
	role:UserRole

	@BeforeInsert()
	async hashPassowrd():Promise<void>{
		try{
			this.password = await bcrypt.hash(this.password,12);
		}catch(err){
			console.log(err);
			throw InternalServerErrorException
		}
	}

	async comparePassword(password):Promise<any>{
		try{
		const hashPassowrd = await bcrypt.compare(password,this.password);
		return hashPassowrd;
	}catch(err){
		console.log(err);
		throw InternalServerErrorException
	}
	}
}
