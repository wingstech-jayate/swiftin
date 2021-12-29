import { ReqSignDto } from './../reqsign.dto';
import { SignupService } from './signup.service';
export declare class SignupController {
    private signupService;
    constructor(signupService: SignupService);
    signin(reqsign: ReqSignDto): Promise<any>;
}
