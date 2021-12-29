import { ReqSignDto } from './../reqsign.dto';
import { UserRepository } from './user.repository';
export declare class SignupService {
    private userRepository;
    constructor(userRepository: UserRepository);
    creates(reqsign: ReqSignDto): Promise<any>;
}
