import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
imports : [
    TypeOrmModule.forRootAsync({
        imports : [ConfigModule],
        inject: [ConfigService],
        useFactory : (ConfigService : ConfigService) => ({
            tyoe : 'postgres',
            host: ConfigService.get<string>('POSTGRES_HOST'),
            port: ConfigService.get<number>('POSTGRES_PORT'),
            usename: ConfigService.get<string>('POSTGRES_USERNAME'),
            password: ConfigService.get<string>('POSTGRES_PASSWORD'),
            database:ConfigService.get<string>('POSTGRES_DB'),
            entities : [__dirname + '/../**/*.entity{.ts, .js}'],
            sutoLoadentities: true, 
            synchronize : true,
        })
    })
],

})
export class DatebaseModule {}
