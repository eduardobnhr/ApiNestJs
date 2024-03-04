/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { TbEr } from '../model/TbEr.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';


@Injectable()
export class TbErService {
  createEr: any;
  constructor(
    @Inject('TBER_REPOSITORY')
    private TbErRepository: Repository<TbEr>,
  ) {}

  async listar(): Promise<TbEr[]> {
    return this.TbErRepository.find();
  }

  async criarEr(numeroEr: string, dataRegistro: Date, usuarioId: number): Promise<TbEr> {
    try {
      const er = this.TbErRepository.create({
        numeroEr,
        dataRegistro,
        usuario: { id: usuarioId },
      });
  
      // Salvar a entidade no banco de dados
      const createdEr = await this.TbErRepository.save(er);
  
      return createdEr;
    } catch (error) {
      throw new Error(`Erro durante a criação da ER: ${error.message}`);
    }
  }
}