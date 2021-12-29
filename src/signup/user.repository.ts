import { ReqSignDto } from './../reqsign.dto';
import { EntityRepository, Repository } from "typeorm";
import { user } from "./userdata.entity";

@EntityRepository(user)
export class UserRepository extends Repository<user>
{
    async creat(reqsign:ReqSignDto):Promise<any>
    {
        console.log(reqsign.username,"reqsign")
        const query= await this.createQueryBuilder('user').where("user.username=:name",{name:reqsign.username})
         .andWhere("user.password = :password", { password: reqsign.password }).getOne();
         console.log(query)
         return query;
    }

}