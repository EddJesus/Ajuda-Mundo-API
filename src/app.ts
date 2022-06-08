import express from 'express'

import { AppDataSource } from './data-source'

import 'dotenv/config'
import 'reflect-metadata'

const app = express()

AppDataSource.initialize()

app.use('/health', (req, res) => {
  res.json({
    status: 'up'
  })
})

export { app }
