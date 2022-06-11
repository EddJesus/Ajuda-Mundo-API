import { UpdateActivityDto, CreateActivityDto } from './dtos'
import { ActivityService } from './ActivityService'

import { Request, Response } from 'express'

class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  async findAllActivities(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const activities = await this.activityService.findAllActivities()

      return res.status(201).json({
        activities,
      })
    } catch (error) {
      console.log('ActivityController.findAllActivities error', error)
      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }

  async updateActivity(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const body: UpdateActivityDto = req.body
      const { activityId, activity } = body

      const result = await this.activityService.updateActivity(
        activityId,
        activity,
      )

      console.log(result)

      return res.status(204).json({
        activityId,
      })
    } catch (error) {
      console.log('ActivityController.updateActivity error', error)
      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }

  async createActivity(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const body: CreateActivityDto = req.body
      const { name, points, description, mainImg, status, ongId, userId } = body

      const result = await this.activityService.createActivity({
        name,
        points,
        description,
        mainImg,
        status,
        ongId,
        userId,
      })

      console.log(result)

      return res.status(200).json({
        result,
      })
    } catch (error) {
      console.log('ActivityController.createActivity error', error)
      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }

  async findActivityById(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const params = req.params
      const activityId = params.id

      const result = await this.activityService.findActivityById(
        Number(activityId),
      )

      console.log(result)

      return res.status(200).json({
        result,
      })
    } catch (error) {
      console.log('ActivityController.findActivityById error', error)

      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }
}

export { ActivityController }
