import { Module } from '@nestjs/common';
import {ResturantResolver} from './resturant.resolver';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Resturant} from './entities/resturant.entity';
import {ResturantService} from './resturant.service'
@Module({
	imports:[
		TypeOrmModule.forFeature([Resturant])
	],
	providers:[ResturantService , ResturantResolver]
})
export class ResturantModule {}
