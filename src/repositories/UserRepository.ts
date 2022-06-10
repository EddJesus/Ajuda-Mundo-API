import { AppDataSource } from '../data-source'
import { UserEntity } from '../entities/User.entity'

export class UserRepository {
  async getUserById(userId: number): Promise<UserEntity | null> {
    try {
      console.log(`Iniciando consulta de usuario pelo id: ${userId}...`)
      const userRepository = AppDataSource.getRepository(UserEntity)

      const user = await userRepository.findOneBy({ userId })

      console.log(`Retorno da consulta: ${user}`)

      return user
    } catch (error) {
      console.log('Erro ao realizar consulta de usuario!', error)
      throw error
    }
  }

  async getUsers(): Promise<UserEntity[] | null> {
    try {
      console.log('Iniciando consulta de usuarios...')
      const userRepository = AppDataSource.getRepository(UserEntity)

      const users = await userRepository.find()

      console.log(`Retorno da consulta: ${users}`)

      return users
    } catch (error) {
      console.log('Erro ao realizar consulta de usuarios!', error)
      throw error
    }
  }

  // TODO: mover para DTO e tipar os dados
  async saveUser(
    name: any,
    email: any,
    password: any,
    profileImg: any,
    pointsScore: any,
    activitiesIds: any,
  ): Promise<any> {
    // TODO: encontrar tipagem para retorno
    try {
      console.log('Iniciando registro de novo usuario...')
      const userRepository = AppDataSource.getRepository(UserEntity)

      const response = await userRepository.save({
        name,
        email,
        password,
        profileImg,
        pointsScore,
        activitiesIds,
      })

      console.log(`Retorno da consulta: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar cadastro de usuario!', error)
      throw error
    }
  }

  // TODO: mover para DTO e tipar os dados
  async updateUser(
    userId: number,
    name: any,
    points: any,
    description: any,
    mainImg: any,
    status: any,
    ongId: any,
  ): Promise<any> {
    // TODO: encontrar tipagem para retorno
    try {
      console.log(`Iniciando update de usuario com id: ${userId}...`)
      const userRepository = AppDataSource.getRepository(UserEntity)

      const response = await userRepository.save({
        userId,
        name,
        points,
        description,
        mainImg,
        status,
        ongId,
      })

      console.log(`Retorno do update: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar update de usuario!', error)
      throw error
    }
  }

  // TODO: se possível arrumar tipagem do retorno desse método
  async deleteUser(userId: number): Promise<any> {
    try {
      console.log(`Iniciando exclusão de usuario pelo id: ${userId}...`)
      const userRepository = AppDataSource.getRepository(UserEntity)

      const response = await userRepository.delete({ userId })

      console.log(`Retorno da exclusão: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar exclusão de usuario!', error)
      throw error
    }
  }
}
