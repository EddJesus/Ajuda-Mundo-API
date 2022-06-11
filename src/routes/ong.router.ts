import { Router, Request, Response } from 'express'

import { makeValidateBody } from '../middlewares/RouteValidator'

import { OngFactory, CreateOngDto } from '../modules/Ong'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
  await OngFactory().findAllOngs(req, res)
})

routes.get('/:id', async (req: Request, res: Response) => {
  await OngFactory().findOngById(req, res)
})

routes.post(
  '/',
  makeValidateBody(CreateOngDto),
  async (req: Request, res: Response) => {
    await OngFactory().createOng(req, res)
  },
)

export { routes }
