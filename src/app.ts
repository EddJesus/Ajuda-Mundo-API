import express from 'express'

import { InitializeDatabase } from './data-source'

import { healthRouter, ongRouter, userRouter, activityRouter } from './routes'

import 'dotenv/config'
import 'reflect-metadata'

const app = express()

try {
  InitializeDatabase()
  console.log('Banco de dados inicializado com sucesso!')
} catch (error) {
  console.log('Erro ao inicializar banco de dados', error)
}

app.use('/health', healthRouter.routes)
app.use('/ong', ongRouter.routes)
app.use('/user', userRouter.routes)
app.use('/activity', activityRouter.routes)

export { app }
