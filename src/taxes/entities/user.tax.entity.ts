import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class UserTax {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public id: number;

    @Column()
    public tax_no: number;
    
    @Column()
    public tax_title: string;
   
    @Column()
    public user_id: number;
  
    @Column()
    public desc: string;
  
    @Column()
    public amount: string;
  
    @Column()
    public frequency: string;
  
    @Column({default:"Unpaid"})
    public status: string;
   
    @Column({default:false})
    public is_paid: boolean;
  
    @UpdateDateColumn({nullable:true})
    public date_paid: string;
  
    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
  }
  