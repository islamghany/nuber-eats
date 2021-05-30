import {Injectable} from '@nestjs/common';
import {User} from './entities/user.entity';
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm';
import {CreateAccountInput} from './dtos/create-account.dto';
import {LoginInput} from './dtos/login.dto';

@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(User)
    private readonly users : Repository<User>
  ){}

  async login({password,email}:LoginInput):Promise<string | undefined>{
    try{
      const user = await this.users.findOne({email});
      if(!user){
        return "Email Does't Exist";
      }
      const hashedPassword = await user.comparePassword(password);
      if(!hashedPassword){
        return "Incorrect Password";
      }
    }catch(err){
      return "Could't create An Account, try again layer";
    }
  }
  async createAccount({password,email,role}:CreateAccountInput):Promise<string | undefined >{
    try{
      const exist = await this.users.findOne({email});
      if(exist){
        return "This Account is Already exist, try login";
      }
      await this.users.save(this.users.create({email,role,password}));
    }catch(err){
      return "Could't create An Account, try again layer";
    }
  }
}
