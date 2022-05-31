import { app } from './app'

const PORT = process.env.PORT

console.log('-----------------')
console.log(PORT)
console.log('-----------------')

app.listen(PORT, () => {
  console.log(`server rodando na porta ${PORT}`)
})