import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTp } from './entities/usertp.entity';
import { comparePassword } from './../../utils/functions';
import { TaxesService } from './../../taxes/taxes.service';

@Injectable()
export class AuthenticationtpService {
  constructor(
    @InjectRepository(UserTp) private usersRepo: Repository<UserTp>,
    // private taxesService: forwardRef(()=> TaxesService),
    @Inject(forwardRef(() => TaxesService)) private taxesService: TaxesService,
  ) {}

  async signup(data: any) {
    const user = await this.usersRepo.save(data);
    const taxes = await this.taxesService.getAllTaxes();

    for (let index = 0; index < taxes.length; index++) {
      await this.taxesService.createUserTax({ ...user, ...taxes[index] });
    }

    return user;
  }

  async signin(data: any) {
    const { email, password } = data;
    const getUser = await this.usersRepo.findOne({ where: { email: email } });
    const dbPassword = getUser.password;
    const check = comparePassword({
      password: password,
      dbPassword: dbPassword,
    });
    if (check === true) {
      return await this.usersRepo.findOne({
        where: { email: email },
        select: ['email', 'name', 'phone', 'role', 'user_id'],
      });
    } else {
      return { status: false, message: 'Wrong Credentials' };
    }
  }

  async getAllUsers() {
    return await this.usersRepo.find({
      select: ['email', 'name', 'phone', 'role', 'user_id'],
    });
  }

  async getUser(user_id: number) {
    return await this.usersRepo.findOne({
      where: { user_id: user_id },
      select: ['email', 'name', 'phone', 'role', 'user_id'],
    });
  }
}
