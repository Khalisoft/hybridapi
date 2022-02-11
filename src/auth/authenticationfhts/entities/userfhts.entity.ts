import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class UserFhts {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public user_id: number;
  
    @Column()
    public name: string;
  
    @Column()
    public email: string;
    
    @Column()
    public phone: string;

    @Column()
    public password: string;
  
    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
  }
  