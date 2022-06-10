import { AppDataSource } from '../data-source'
import { ActivityEntity } from '../entities/Activity.entity'

export class ActivityRepository {
  async getActivityById(activityId: number): Promise<ActivityEntity | null> {
    try {
      console.log(`Iniciando consulta de atividade pelo id: ${activityId}...`)
      const activyRepository = AppDataSource.getRepository(ActivityEntity)

      const activity = await activyRepository.findOneBy({ activityId })

      console.log(`Retorno da consulta: ${activity}`)

      return activity
    } catch (error) {
      console.log('Erro ao realizar consulta de atividade!', error)
      throw error
    }
  }

  async getActivities(): Promise<ActivityEntity[] | null> {
    try {
      console.log('Iniciando consulta de atividades...')
      const activyRepository = AppDataSource.getRepository(ActivityEntity)

      const activities = await activyRepository.find()

      console.log(`Retorno da consulta: ${activities}`)

      return activities
    } catch (error) {
      console.log('Erro ao realizar consulta de atividades!', error)
      throw error
    }
  }

  // TODO: mover para DTO e tipar os dados
  async saveActivity(
    name: any,
    points: any,
    description: any,
    mainImg: any,
    status: any,
    ongId: any,
    userId: any,
  ): Promise<any> {
    // TODO: encontrar tipagem para retorno
    try {
      console.log('Iniciando registro de nova atividade...')
      const activyRepository = AppDataSource.getRepository(ActivityEntity)

      const response = await activyRepository.save({
        name,
        points,
        description,
        mainImg,
        status,
        ongId,
        userId,
      })

      console.log(`Retorno da consulta: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar cadastro de atividade!', error)
      throw error
    }
  }

  // TODO: mover para DTO e tipar os dados
  async updateActivity(
    activityId: number,
    name: any,
    points: any,
    description: any,
    mainImg: any,
    status: any,
    ongId: any,
    userId: any,
  ): Promise<any> {
    // TODO: encontrar tipagem para retorno
    try {
      console.log(`Iniciando update de atividade com id: ${activityId}...`)
      const activyRepository = AppDataSource.getRepository(ActivityEntity)

      const response = await activyRepository.save({
        activityId,
        name,
        points,
        description,
        mainImg,
        status,
        ongId,
        userId,
      })

      console.log(`Retorno do update: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar update de atividade!', error)
      throw error
    }
  }

  // TODO: se possível arrumar tipagem do retorno desse método
  async deleteActivity(activityId: number): Promise<any> {
    try {
      console.log(`Iniciando exclusão de atividade pelo id: ${activityId}...`)
      const activyRepository = AppDataSource.getRepository(ActivityEntity)

      const response = await activyRepository.delete({ activityId })

      console.log(`Retorno da exclusão: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar exclusão de atividade!', error)
      throw error
    }
  }
}
