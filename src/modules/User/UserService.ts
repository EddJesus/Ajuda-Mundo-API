import { UserType } from './interfaces'

import { UserRepository } from '../../repositories/UserRepository'
import { UserEntity } from '../../entities/User.entity'

class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAllUsers(): Promise<UserEntity[]> {
    try {
      const users = await this.userRepository.getUsers()

      if (users) {
        return users
      } else {
        throw new Error('Erro ao consultar usuários')
      }
    } catch (error) {
      console.log('UserService.findAllUsers error', error)
      throw error
    }
  }

  async updateUser(userId: number, User: UserType): Promise<UserEntity> {
    try {
      const result = await this.userRepository.updateUser(userId, User)

      return result
    } catch (error) {
      console.log('UserService.updateUser error', error)
      throw error
    }
  }

  async createUser(User: UserType): Promise<UserEntity> {
    try {
      const result = await this.userRepository.saveUser(User)

      return result
    } catch (error) {
      console.log('UserService.createUser error', error)
      throw error
    }
  }

  async findUserById(userId: number): Promise<UserEntity> {
    try {
      const result = await this.userRepository.getUserById(userId)

      if (result) {
        return result
      } else {
        throw new Error('Usuário não encontrado!')
      }
    } catch (error) {
      console.log('UserService.findUserById error', error)
      throw error
    }
  }
}

export { UserService }
