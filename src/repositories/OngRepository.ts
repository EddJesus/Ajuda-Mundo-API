import { AppDataSource } from '../data-source'
import { OngEntity } from '../entities/Ong.entity'

export class OngRepository {
  async getOngById(ongId: number): Promise<OngEntity | null> {
    try {
      console.log(`Iniciando consulta de ong pelo id: ${ongId}...`)
      const ongRepository = AppDataSource.getRepository(OngEntity)

      const ong = await ongRepository.findOneBy({ ongId })

      console.log(`Retorno da consulta: ${ong}`)

      return ong
    } catch (error) {
      console.log('Erro ao realizar consulta de ong!', error)
      throw error
    }
  }

  async getOngs(): Promise<OngEntity[] | null> {
    try {
      console.log('Iniciando consulta de ongs...')
      const ongRepository = AppDataSource.getRepository(OngEntity)

      const ongs = await ongRepository.find()

      console.log(`Retorno da consulta: ${ongs}`)

      return ongs
    } catch (error) {
      console.log('Erro ao realizar consulta de ongs!', error)
      throw error
    }
  }

  // TODO: mover para DTO e tipar os dados
  async saveOng(
    name: any,
    email: any,
    password: any,
    profileImg: any,
    activitiesIds: any,
  ): Promise<any> {
    // TODO: encontrar tipagem para retorno
    try {
      console.log('Iniciando registro de novo ong...')
      const ongRepository = AppDataSource.getRepository(OngEntity)

      const response = await ongRepository.save({
        name,
        email,
        password,
        profileImg,
        activitiesIds,
      })

      console.log(`Retorno da consulta: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar cadastro de ong!', error)
      throw error
    }
  }

  // TODO: mover para DTO e tipar os dados
  async updateOng(
    ongId: number,
    name: any,
    points: any,
    description: any,
    mainImg: any,
    status: any,
  ): Promise<any> {
    // TODO: encontrar tipagem para retorno
    try {
      console.log(`Iniciando update de ong com id: ${ongId}...`)
      const ongRepository = AppDataSource.getRepository(OngEntity)

      const response = await ongRepository.save({
        ongId,
        name,
        points,
        description,
        mainImg,
        status,
      })

      console.log(`Retorno do update: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar update de ong!', error)
      throw error
    }
  }

  // TODO: se possível arrumar tipagem do retorno desse método
  async deleteOng(ongId: number): Promise<any> {
    try {
      console.log(`Iniciando exclusão de ong pelo id: ${ongId}...`)
      const ongRepository = AppDataSource.getRepository(OngEntity)

      const response = await ongRepository.delete({ ongId })

      console.log(`Retorno da exclusão: ${response}`)

      return response
    } catch (error) {
      console.log('Erro ao realizar exclusão de ong!', error)
      throw error
    }
  }
}
