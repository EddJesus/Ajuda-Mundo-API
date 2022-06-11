import { ActivityRepository } from '../../repositories/ActivityRepository'
import { ActivityController } from './ActivityController'
import { ActivityService } from './ActivityService'

export const ActivityFactory = (): ActivityController => {
  const activityRepository = new ActivityRepository()
  const activityService = new ActivityService(activityRepository)
  const activityController = new ActivityController(activityService)

  return activityController
}
