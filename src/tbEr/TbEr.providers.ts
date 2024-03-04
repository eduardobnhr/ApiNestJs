/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { TbEr } from './model/TbEr.entity';

export const TbErProviders = [
  {
    provide: 'TBER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TbEr),
    inject: ['DATA_CONNECTION'],
  },
];