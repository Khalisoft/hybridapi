import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Payment {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public payment_id: number;

    @Column()
    public tax_no: number;
    
    @Column()
    public tax_title: string;
    
    @Column()
    public ref_no: string;
   
    @Column()
    public user_id: number;
  
    @Column()
    public amount: string;
  
    @Column({default:"Paid"})
    public status: string;
   
    @Column({default:true})
    public is_paid: boolean;
  
    @CreateDateColumn({nullable:true})
    public date_paid: Date;
  
    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
  }
  