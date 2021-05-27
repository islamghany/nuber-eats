import {ArgsType,Field} from '@nestjs/graphql';
import {IsString,IsBoolean,Length} from 'class-validator';
@ArgsType()
export class CreateResturantDTO{
	@Field(type=> String)
	@IsString()
	@Length(5,20)
	name:string

	@Field(type=> Boolean)
	@IsBoolean()
	isVegan:boolean

	@Field(type=> String)
	@IsString()
	@Length(5,20)
	address:string

	@Field(type=> String)
	@IsString()
	@Length(5,20)
	ownerName:string
}