import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Post {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public post_id: number;
  
    @Column()
    public user_id: number;

    @Column()
    public post_title: string;
  
    @Column()
    public post_excerpt: string;
    
    // @Column()
    // public post_image: string;
  
    @CreateDateColumn()
    public created_at: Date;
  
    @UpdateDateColumn()
    public updated_at: Date;
  }
  