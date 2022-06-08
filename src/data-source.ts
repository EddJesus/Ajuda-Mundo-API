import { DataSource } from 'typeorm'

import { Users, Ongs, ActivityStatus, Activities } from './entities'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'src/db/db.sqlite',
  synchronize: true, // caso isso vá para produção deve ser setado como false, OBRIGATORIAMENTE!
  logging: true,
  entities: [Users, Ongs, ActivityStatus, Activities],
  subscribers: [],
  migrations: []
})
