import {InputType,ObjectType,PickType,Field} from '@nestjs/graphql';
import {User} from '../entities/user.entity';
import {MutationOutputs} from '../../common/dtos/core.dto'
@InputType()
export class LoginInput extends PickType(User,["email","password"]){}


@ObjectType()
export class LoginOutput extends MutationOutputs{
  @Field(type=>String,{nullable:true})
  token?:string
}
