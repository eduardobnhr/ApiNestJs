/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from '../model/usuario.entity';
import { UsuarioCadastrarDto } from '../dto/usuario.create.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private UsuarioRepository: Repository<Usuario>,
  ) { }

  async listar(): Promise<Usuario[]> {
    return this.UsuarioRepository.find();
  }
  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto> {
    const usuario = new Usuario();
    usuario.login = data.login;
    usuario.nome = data.nome;
  
    try {
      await this.UsuarioRepository.save(usuario);
      return {
        status: true,
        mensagem: "Usuário cadastrado"
      };
    } catch (error) {
      return {
        status: false,
        mensagem: "Houve um erro no cadastro"
      };
    }
  }
}
