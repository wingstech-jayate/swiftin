import { ReqSignDto } from './../reqsign.dto';
import { user } from './userdata.entity';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupService {
  constructor(private userRepository: UserRepository) {}

  async creates(reqsign: ReqSignDto) {
    return this.userRepository.creat(reqsign);
  }
}
