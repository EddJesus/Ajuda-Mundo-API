import { DataSource } from 'typeorm'

import { UserEntity, OngEntity, ActivityStatusEntity, ActivityEntity } from './entities'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'src/db/db.sqlite',
  synchronize: true, // caso isso vá para produção deve ser setado como false, OBRIGATORIAMENTE!
  logging: true,
  entities: [UserEntity, OngEntity, ActivityStatusEntity, ActivityEntity],
  subscribers: [],
  migrations: []
})
