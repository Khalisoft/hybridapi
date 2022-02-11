import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Book {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public book_id: number;
  
    @Column()
    public user_id: number;
    
    @Column()
    public book_title: string;
  
    @Column()
    public book_excerpt: string;
    
    @Column({nullable:true})
    public book_image: string;
    
    @Column()
    public book_file: string;
  
    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
  }
  