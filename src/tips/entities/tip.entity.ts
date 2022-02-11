import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Tip {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public tip_id: number;
  
    @Column()
    public user_id: number;
  
    @Column()
    public tip_title: string;
  
    @Column()
    public tip_excerpt: string;
    
    // @Column()
    // public tip_image: string;
  
    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
  }
  