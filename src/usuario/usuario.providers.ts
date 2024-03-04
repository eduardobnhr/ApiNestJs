/* eslint-disable prettier/prettier */
import { Usuario } from './model/usuario.entity';
import { DataSource } from 'typeorm';

export const UsuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuario),
    inject: ['DATA_CONNECTION'],
  },
];