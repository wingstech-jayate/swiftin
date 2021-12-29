import { ReqSignDto } from './../reqsign.dto';
import { Body, Controller, Post} from '@nestjs/common';
import { SignupService } from './signup.service';
@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupService) {}

  @Post()
  async signin(@Body() reqsign: ReqSignDto) {
    console.log(reqsign);
    return await this.signupService.creates(reqsign);
  }
}
