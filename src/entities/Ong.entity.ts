import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class OngEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'ong_id' })
  ongId: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: number

  @Column({ name: 'profile_img', nullable: true })
  profileImg: string

  @Column({ name: 'activities_ids' })
  activitiesIds: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
