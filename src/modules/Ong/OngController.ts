import { UpdateOngDto, CreateOngDto } from './dtos'
import { OngService } from './OngService'

import { Request, Response } from 'express'

class OngController {
  constructor(private readonly OngService: OngService) {}

  async findAllOngs(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const ongs = await this.OngService.findAllOngs()

      return res.status(201).json({
        ongs,
      })
    } catch (error) {
      console.log('OngController.findAllOngs error', error)
      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }

  async updateOng(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const body: UpdateOngDto = req.body
      const { ongId, ong } = body

      const result = await this.OngService.updateOng(ongId, ong)

      console.log(result)

      return res.status(204).json({
        ongId,
      })
    } catch (error) {
      console.log('OngController.updateOng error', error)
      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }

  async createOng(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const body: CreateOngDto = req.body
      const { email, name, password, profileImg } = body

      const result = await this.OngService.createOng({
        email,
        name,
        password,
        profileImg,
      })

      console.log(result)

      return res.status(200).json({
        result,
      })
    } catch (error) {
      console.log('OngController.createOng error', error)
      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }

  async findOngById(
    req: Request,
    res: Response,
  ): Promise<Response<unknown, Record<string, unknown>>> {
    try {
      const params = req.params
      const ongId = params.id

      const result = await this.OngService.findOngById(Number(ongId))

      console.log(result)

      return res.status(200).json({
        result,
      })
    } catch (error) {
      console.log('OngController.findOngById error', error)

      if (error instanceof Error) {
        return res.status(500).json({
          erro: true,
          message: error.message,
        })
      } else {
        return res.status(500).json({
          erro: true,
          message: 'Erro não mapeado',
        })
      }
    }
  }
}

export { OngController }
