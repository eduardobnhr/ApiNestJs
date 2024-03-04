/* eslint-disable prettier/prettier */
import { Post } from '@nestjs/common';
/* eslint-disable prettier/prettier */

import { TbErService } from "../service/TbEr.service";
import { TbEr } from "../model/TbEr.entity";
import { Body, Controller, Get } from "@nestjs/common";

@Controller('er')
export class TbErController {
    constructor(private readonly tberrService: TbErService) { }

    @Get('listar')
    async listar(): Promise<TbEr[]> {
        return this.tberrService.listar();
    }
    
    @Post('cadastrar')
    async criarEr(@Body() createErDto: any): Promise<any> {
        try {
            const { numeroEr, dataRegistro, usuarioId } = createErDto;
            const criarEr = await this.tberrService.createEr(numeroEr, dataRegistro, usuarioId);

            return { message: 'ER criada com sucesso', er: criarEr };
        } catch (error) {
            return { message: 'Erro ao criar a ER', error: error.message };
        }
    }
}
