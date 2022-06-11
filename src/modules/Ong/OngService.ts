import { OngType } from './interfaces'

import { OngRepository } from '../../repositories/OngRepository'
import { OngEntity } from '../../entities/Ong.entity'

class OngService {
  constructor(private readonly ongRepository: OngRepository) {}

  async findAllOngs(): Promise<OngEntity[]> {
    try {
      const ongs = await this.ongRepository.getOngs()

      if (ongs) {
        return ongs
      } else {
        throw new Error('Erro ao consultar ongs')
      }
    } catch (error) {
      console.log('OngService.findAllOngs error', error)
      throw error
    }
  }

  async updateOng(ongId: number, ong: OngType): Promise<OngEntity> {
    try {
      const result = await this.ongRepository.updateOng(ongId, ong)

      return result
    } catch (error) {
      console.log('OngService.updateOng error', error)
      throw error
    }
  }

  async createOng(ong: OngType): Promise<OngEntity> {
    try {
      const result = await this.ongRepository.saveOng(ong)

      return result
    } catch (error) {
      console.log('OngService.createOng error', error)
      throw error
    }
  }

  async findOngById(ongId: number): Promise<OngEntity> {
    try {
      const result = await this.ongRepository.getOngById(ongId)

      if (result) {
        return result
      } else {
        throw new Error('Ong não encontrada!')
      }
    } catch (error) {
      console.log('OngService.findOngById error', error)
      throw error
    }
  }
}

export { OngService }
