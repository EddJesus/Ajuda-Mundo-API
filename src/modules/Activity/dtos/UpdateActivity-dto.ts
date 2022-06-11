import { ActivityType } from '../interfaces'

import { IsInt } from 'class-validator'

export class UpdateActivityDto {
  @IsInt()
  activityId: number

  activity: ActivityType
}
