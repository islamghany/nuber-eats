import {ObjectType,Field} from '@nestjs/graphql';

@ObjectType()
export class MutationOutputs{
  @Field(type=>String , {nullable:true})
  error?:string
  @Field(type=>Boolean)
  ok:boolean
}
