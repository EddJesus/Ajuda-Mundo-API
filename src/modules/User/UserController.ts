import { UpdateUserDto, CreateUserDto } from './dtos'
import { UserService } from './UserService'

import { Request, Response } from 'express'

class UserController {
  constructor(private readonly userService: UserService) {}

  async findAllUsers(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const users = await this.userService.findAllUsers()

      return res.status(201).json({
        users,
      })
    } catch (error) {
      console.log('UserController.findAllUsers error', error)
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

  async updateUser(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const body: UpdateUserDto = req.body
      const { userId, user } = body

      const result = await this.userService.updateUser(userId, user)

      console.log(result)

      return res.status(204).json({
        userId,
      })
    } catch (error) {
      console.log('UserController.updateUser error', error)
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

  async createUser(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const body: CreateUserDto = req.body
      const { email, name, password, profileImg } = body

      const result = await this.userService.createUser({
        email,
        name,
        password,
        profileImg,
      })

      console.log(result)

      return res.status(200).json({
        result,
      })
    } catch (error) {
      console.log('UserController.createUser error', error)
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

  async findUserById(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const params = req.params
      const userId = params.id

      const result = await this.userService.findUserById(Number(userId))

      console.log(result)

      return res.status(200).json({
        result,
      })
    } catch (error) {
      console.log('UserController.findUserById error', error)

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

export { UserController }
