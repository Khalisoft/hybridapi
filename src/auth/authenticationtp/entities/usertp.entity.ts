import {
  Column,
  Entity,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserTp {
  @PrimaryGeneratedColumn()
  @Index({ unique: true })
  public user_id: number;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public phone: string;

  @Column()
  public password: string; 

  @Column()
  public role: string;
  
  @Column()
  public shop_name: string;
  
  @Column()
  public shop_reg_no: string;
  
  @Column()
  public shop_address: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
