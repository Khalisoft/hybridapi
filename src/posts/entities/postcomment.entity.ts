import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PostComment {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public comment_id: number;

    @Column()
    public post_id: number;

    @Column()
    public user_id: number;

    @Column()
    public comment_text: string;
    
    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}
