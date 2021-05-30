import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Resturant} from './entities/resturant.entity'
import {Repository} from 'typeorm'
@Injectable()
export class ResturantService{
	constructor(
		@InjectRepository(Resturant)
		private readonly resturantRepository: Repository<Resturant>
		){}
	resturants():Promise<Resturant[]>{
		return this.resturantRepository.find();
	}
}
