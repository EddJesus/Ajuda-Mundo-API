import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class ActivityEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  activityId: number

  @Column()
  name: string

  @Column()
  points: number

  @Column({ nullable: true })
  description: string

  @Column({ name: 'main_img', nullable: true })
  mainImg: number

  @Column({ default: 0 })
  status: number

  @Column({ name: 'ong_id' })
  ongId: number

  @Column({ name: 'user_id' })
  userId: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
