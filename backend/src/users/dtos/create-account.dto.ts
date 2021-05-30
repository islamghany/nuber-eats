import {PickType,InputType,ObjectType,Field} from '@nestjs/graphql';
import {User} from '../entities/user.entity';
import {MutationOutputs} from '../../common/dtos/core.dto'

@InputType()
export class CreateAccountInput extends PickType(User,[
  'email',
  'password',
  'role'
]){}

@ObjectType()
export class CreateAccountOutput extends MutationOutputs{}
