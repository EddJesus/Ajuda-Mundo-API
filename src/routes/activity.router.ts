import { Router, Request, Response } from 'express'

import { makeValidateBody } from '../middlewares/RouteValidator'

import { ActivityFactory, CreateActivityDto } from '../modules/Activity'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
  await ActivityFactory().findAllActivities(req, res)
})

routes.get('/:id', async (req: Request, res: Response) => {
  await ActivityFactory().findActivityById(req, res)
})

routes.post(
  '/',
  makeValidateBody(CreateActivityDto),
  async (req: Request, res: Response) => {
    await ActivityFactory().createActivity(req, res)
  },
)

routes.delete('/:id', async (req: Request, res: Response) => {
  await ActivityFactory().deleteActivityById(req, res)
})

export { routes }
