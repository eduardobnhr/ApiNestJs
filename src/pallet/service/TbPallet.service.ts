/* eslint-disable prettier/prettier */

import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TbPallet } from '../model/TbPallet.entity'; 

@Injectable()
export class TbPalletService {
  constructor(
    @Inject('PALLET_REPOSITORY')
    private palletRepository: Repository<TbPallet>,
  ) {}

  async listar(): Promise<TbPallet[]> {
    return this.palletRepository.find();
  }
}