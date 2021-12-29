import { UserRepository } from './user.repository';
import { user } from './userdata.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
