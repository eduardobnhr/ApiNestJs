/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { TbErProviders } from './TbEr.providers';
import { TbErService } from './service/TbEr.service';
import { TbErController } from './controller/TbEr.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...TbErProviders,
    TbErService,
  ],
  controllers: [TbErController]
})
export class TbErModule {}