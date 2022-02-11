import {
    Column,
    Entity,
    Index,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TipComment {
    @PrimaryGeneratedColumn()
    @Index({ unique: true })
    public comment_id: number;

    @Column()
    public tip_id: number;

    @Column()
    public user_id: number;

    @Column()
    public comment_text: string;
    
    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;
}
