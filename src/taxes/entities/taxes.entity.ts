import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Taxes {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public tax_no: number;

    @Column()
    public tax_title: string;
  
    @Column()
    public desc: string;
  
    @Column()
    public amount: string;
  
    @Column()
    public frequency: string;
  
    @Column({default:true})
    public isActive: boolean;
  
    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
  }
  