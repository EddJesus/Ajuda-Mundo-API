import express from 'express'

import "dotenv/config";

const app = express()

app.use('/', () => {
  console.log('Teste')
})

export { app }