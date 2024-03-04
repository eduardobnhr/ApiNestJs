/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TbpalletProviders } from './TbPallet.providers';
import { TbPalletService } from './service/TbPallet.service'; 

@Module({
  imports: [DatabaseModule],
  providers: [
    ...TbpalletProviders,
    TbPalletService, 
  ],
})
export class TbPalletModule {}