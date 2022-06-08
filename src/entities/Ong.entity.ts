import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Ongs extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'ong_id' })
    ongId: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: number

    @Column({ name: 'profile_img' })
    profileImg: number

    @Column({ name: 'activities_ids' })
    activiesIds: number[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
}
