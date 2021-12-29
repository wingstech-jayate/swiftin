import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';


@Module({
  imports: [SignupModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'123456789',
    database:'jayatedb2',
    autoLoadEntities:true,
    synchronize:true,

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
