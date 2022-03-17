import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Taxes } from './entities/taxes.entity';
import { UserTax } from './entities/user.tax.entity';
import { AuthenticationtpService } from './../auth/authenticationtp/authenticationtp.service';

@Injectable()
export class TaxesService {
  constructor(
    @InjectRepository(Taxes) private taxesRepo: Repository<Taxes>,
    @InjectRepository(UserTax) private userTaxesRepo: Repository<UserTax>,
    @Inject(forwardRef(() => AuthenticationtpService))
    private authService: AuthenticationtpService,
  ) {}

  async createTax(data: any) {
    const tax = await this.taxesRepo.save(data);
    const users = await this.authService.getAllUsers();

    for (let index = 0; index < users.length; index++) {
      await this.createUserTax({ ...users[index], ...tax });
    }

    return tax;
  }

  async getAllTaxes() {
    return await this.taxesRepo.find();
  }

  async getAllUsersTax() {
    return await this.userTaxesRepo.find();
  }

  async getUserTaxes(user_id: number) {
    return await this.userTaxesRepo.find({ where: { user_id: user_id } });
  }

  async createUserTax(data: any) {
    return await this.userTaxesRepo.save(data);
  }

  async deleteUserTax(data: any) {
    const { tax_no } = data;
    return await this.userTaxesRepo.delete({ tax_no: tax_no });
  }

  async payTax(data: any) {
    const { user_id, tax_no, id } = data;
    await this.userTaxesRepo.update(
      { user_id: user_id, tax_no: tax_no, id: id },
      { is_paid: true, status: 'paid' },
    );
    return await this.userTaxesRepo.findOne({
      where: { user_id: user_id, tax_no: tax_no, id: id },
    });
  }

  async activateTax(data: any) {
    const { tax_no } = data;
    await this.taxesRepo.update({ tax_no: tax_no }, { isActive: true });
    return await this.taxesRepo.findOne({ where: { tax_no: tax_no } });
  }

  async deactivateTax(data: any) {
    const { tax_no } = data;
    await this.taxesRepo.update({ tax_no: tax_no }, { isActive: false });
    return await this.taxesRepo.findOne({ where: { tax_no: tax_no } });
  }

  async removeTax(data: any) {
    const { tax_no } = data;
    await this.deleteUserTax({ tax_no: tax_no });
    await this.taxesRepo.delete({ tax_no: tax_no });
    return { message: 'Tax Deleted' };
  }

  async resetTaxes() {
    const userTaxes = await this.userTaxesRepo.find();
    for (let index = 0; index < userTaxes.length; index++) {
      await this.userTaxesRepo.update(
        { tax_no: userTaxes[index].tax_no, id: userTaxes[index].id },
        { is_paid: false, status: 'not paid' },
      );
    }
    return { message: 'Tax Reset success' };
  }
}
