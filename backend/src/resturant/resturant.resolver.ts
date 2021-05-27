import {Resolver,Query,Args,Mutation} from '@nestjs/graphql';
import {Resturant} from './entities/resturant.entity';
import {CreateResturantDTO} from './dtos/create-returant.dto'
@Resolver(of=>Resturant)
export class ResturantResolver{
	@Query(() => [Resturant])
	resturants(@Args('isVegan') isVegan:boolean){
		return [{
			name:'islam',
			isGood:isVegan
		}]
	}
	@Mutation(type=>Boolean)
	createResturant(@Args() createResturantDTO: CreateResturantDTO){
		console.log(createResturantDTO)
		return true;
	}
}
