import { Router, Request, Response } from 'express'

import { makeValidateBody } from '../middlewares/RouteValidator'

import { UserFactory, CreateUserDto } from '../modules/User'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
  await UserFactory().findAllUsers(req, res)
})

routes.get('/:id', async (req: Request, res: Response) => {
  console.log('caindo aqui')
  await UserFactory().findUserById(req, res)
})

routes.post(
  '/',
  makeValidateBody(CreateUserDto),
  async (req: Request, res: Response) => {
    await UserFactory().createUser(req, res)
  },
)

export { routes }
