import { ActivityType } from './interfaces'

import { ActivityRepository } from '../../repositories/ActivityRepository'
import { ActivityEntity } from '../../entities/Activity.entity'

class ActivityService {
  constructor(private readonly activityRepository: ActivityRepository) {}

  async findAllActivities(): Promise<ActivityEntity[]> {
    try {
      const activities = await this.activityRepository.getActivities()

      if (activities) {
        return activities
      } else {
        throw new Error('Erro ao consultar atividades')
      }
    } catch (error) {
      console.log('ActivityService.findAllActivities error', error)
      throw error
    }
  }

  async updateActivity(
    activityId: number,
    activity: ActivityType,
  ): Promise<ActivityEntity> {
    try {
      const result = await this.activityRepository.updateActivity(
        activityId,
        activity,
      )

      return result
    } catch (error) {
      console.log('ActivityService.updateActivity error', error)
      throw error
    }
  }

  async createActivity(activity: ActivityType): Promise<ActivityEntity> {
    try {
      const result = await this.activityRepository.saveActivity(activity)

      return result
    } catch (error) {
      console.log('ActivityService.createActivity error', error)
      throw error
    }
  }

  async findActivityById(activityId: number): Promise<ActivityEntity> {
    try {
      const result = await this.activityRepository.getActivityById(activityId)

      if (result) {
        return result
      } else {
        throw new Error('Atividade não encontrado!')
      }
    } catch (error) {
      console.log('ActivityService.findActivityById error', error)
      throw error
    }
  }

  async deleteActivityById(activityId: number): Promise<boolean> {
    try {
      const result = await this.activityRepository.deleteActivity(activityId)

      if (result.affected !== 0) {
        return true
      } else {
        throw new Error('Atividade não existe!')
      }
    } catch (error) {
      console.log('ActivityService.deleteActivityById error', error)
      throw error
    }
  }
}

export { ActivityService }
