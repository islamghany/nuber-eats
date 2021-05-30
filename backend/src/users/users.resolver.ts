import {Resolver,Query,Mutation,Args} from '@nestjs/graphql';
import {UsersService} from './users.service';
import {User} from './entities/user.entity';
import {CreateAccountOutput,CreateAccountInput} from './dtos/create-account.dto';
import {LoginInput,LoginOutput} from './dtos/login.dto';

@Resolver(of=>User)
export class UsersResolver{
  constructor(
      private readonly usersService:UsersService
  ){}

  @Query(type=>Boolean)
  hi(){
    return true
  }

  @Mutation(type=>LoginOutput)
  async login(@Args('input') loginInput:LoginInput):Promise<LoginOutput>{
    try{
      const error = await this.usersService.login(loginInput);
      if(error){
        return {
          ok:false,
          error
        }
      }
      return {
        ok:true,
        token:"password"
      }
    }catch(error){
      return{
        ok:false,
        error
      }
    }
  }

  @Mutation(type=>CreateAccountOutput)
  async createAccount(@Args("input") createAccountInput : CreateAccountInput):Promise<CreateAccountOutput>{
    try{
      let error = await this.usersService.createAccount(createAccountInput);
      if(error){
        return {
          ok:false,
          error
        }
      }
      return {
        ok:true
      }
    }catch(error){
      return{
        ok:false,
        error
      }
    }
  }

}
