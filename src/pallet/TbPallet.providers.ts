/* eslint-disable prettier/prettier */

import { TbPallet } from './model/TbPallet.entity';
import { DataSource } from 'typeorm';

export const TbpalletProviders = [
  {
    provide: 'PALLET_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TbPallet),
    inject: ['DATA_CONNECTION'],
  },
];