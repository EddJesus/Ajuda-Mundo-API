import express from 'express'

import { InitializeDatabase } from './data-source'

import { healthRouter, ongRouter, userRouter, activityRouter } from './routes'

import 'dotenv/config'
import 'reflect-metadata'

const app = express()

InitializeDatabase()
  .then(() => {
    console.log('Banco inicializado com sucesso')
  })
  .catch((e) => {
    console.log('erro ao iniciar banco', e)
  })

app.use(express.json())

app.use('/health', healthRouter.routes)
app.use('/ong', ongRouter.routes)
app.use('/user', userRouter.routes)
app.use('/activity', activityRouter.routes)

export { app }
