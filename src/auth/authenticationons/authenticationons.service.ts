import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { comparePassword } from './../../utils/functions';
import { UserOns } from './entities/userons.entity';

@Injectable()
export class AuthenticationonsService {
    constructor(
        @InjectRepository(UserOns) private usersRepo: Repository<UserOns>
    ) { }

    async signup(data: any) {
        return await this.usersRepo.save(data)
    }

    async signin(data: any) {
        const { email, password } = data
        const getUser = await this.usersRepo.findOne({ where: { email: email } })
        const dbPassword = getUser.password
        const check = comparePassword({ password: password, dbPassword: dbPassword })
        if (check === true) {
            getUser.password = undefined
            getUser.created_at = undefined
            getUser.updated_at = undefined
            return { status: true, data: getUser }
        } else {
            return { status: false, message: "Wrong Credentials" }
        }
    }
    async getUser(user_id: number) {

        console.log(user_id)
        const getUser = await this.usersRepo.findOne({ where: { user_id: user_id } })
        getUser.password = undefined
        getUser.created_at = undefined
        getUser.updated_at = undefined
        return getUser
    }
}
