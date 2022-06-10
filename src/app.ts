import express from 'express'

import { InitializeDatabase } from './data-source'

import 'dotenv/config'
import 'reflect-metadata'

const app = express()

try {
  InitializeDatabase()
  console.log('Banco de dados inicializado com sucesso!')
} catch (error) {
  console.log('Erro ao inicializar banco de dados', error)
}

app.use('/health', (req, res) => {
  res.json({
    status: 'up'
  })
})

export { app }
