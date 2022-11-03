import { Entity, Column, PrimaryGeneratedColumn , BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'user' })
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    userId: number

    @Column({
        nullable: false
    })
    username: string

    @Column({
        unique:true,
        nullable: false,
    })
    email: string

    @Column({
        nullable: false
    })
    password: string

    // @CreateDateColumn()
    // created_at: Date

    // @UpdateDateColumn()
    // updated_at: Date
}