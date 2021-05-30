import {Resolver,Query,Args,Mutation} from '@nestjs/graphql';
import {Resturant} from './entities/resturant.entity';
import {CreateResturantDTO} from './dtos/create-returant.dto';
import {ResturantService} from './resturant.service';


@Resolver(of=>Resturant)
export class ResturantResolver{
	constructor(
		private readonly resturantServices: ResturantService
		){}
	@Query(() => [Resturant])
	resturants(){
		return this.resturantServices.resturants();
	}
	@Mutation(type=>Boolean)
	createResturant(@Args() createResturantDTO: CreateResturantDTO){
		console.log(createResturantDTO)
		return true;
	}
}
