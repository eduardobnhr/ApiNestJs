/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { TbPalletService } from './../service/TbPallet.service';

import { TbPallet } from '../model/TbPallet.entity';


@Controller('pallet')
export class TbPalletController{
    constructor(private readonly tbpalletService: TbPalletService){}

    @Get('listar')
    async listar(): Promise<TbPallet[]>{
        return this.tbpalletService.listar();
    }
}