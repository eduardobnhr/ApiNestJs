/* eslint-disable prettier/prettier */

import { UsuarioService } from '../service/usuario.service';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { Usuario } from "../model/usuario.entity";
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './../dto/usuario.create.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Get('listar')
    async listar(): Promise<Usuario[]> {
        return this.usuarioService.listar();
    }
    
    @Post('cadastrar')
    async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto> {
        return this.usuarioService.cadastrar(data);
    }

}