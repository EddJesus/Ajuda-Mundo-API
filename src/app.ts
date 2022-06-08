import express from 'express'

import 'dotenv/config'

const app = express()

app.use('/health', (req, res) => {
  res.json({
    status: 'up'
  })
})

export { app }
