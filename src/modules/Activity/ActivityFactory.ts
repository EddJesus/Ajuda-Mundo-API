import { ActivityRepository } from '../../repositories/ActivityRepository'
import { ActivityController } from './ActivityController'
import { ActivityService } from './ActivityService'

import { UserService } from '../User'
import { UserRepository } from '../../repositories/UserRepository'

export const ActivityFactory = (): ActivityController => {
  const activityRepository = new ActivityRepository()
  const userRepository = new UserRepository()
  const activityService = new ActivityService(activityRepository)
  const userService = new UserService(userRepository)
  const activityController = new ActivityController(
    activityService,
    userService,
  )

  return activityController
}
