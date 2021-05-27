import { Module } from '@nestjs/common';
import { ResturantModule } from './resturant/resturant.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'
import * as Joi from 'joi';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal:true,
			envFilePath:process.env.NODE_ENV === "dev" ? '.env.dev' : '.env.test',
			ignoreEnvFile: process.env.NODE_ENV === 'prod',
			validationSchema:Joi.object({
				NODE_ENV:Joi.string().valid('dev','prod'),
				DB_HOST:Joi.string().required(),
				DB_NAME:Joi.string().required(),
				DB_PORT:Joi.string().required(),
				DB_USERNAME:Joi.string().required(),
				DB_PASSWORD:Joi.string().required()
			})
		}),
		GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			database:process.env.DB_NAME,
			port: +process.env.DB_PORT,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			synchronize: true,
			logging: true,
		}),
		ResturantModule,
	],
})
export class AppModule {}