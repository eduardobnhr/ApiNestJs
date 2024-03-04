/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UsuarioProviders } from './usuario.providers';
import { UsuarioService } from './service/usuario.service';
import { UsuarioController } from './controller/usuario.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [
    ...UsuarioProviders,
    UsuarioService,
  ],
})
export class UsuarioModule {}