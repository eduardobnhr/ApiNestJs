/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TbErModule } from './tbEr/TbEr.module';
import { TbPalletModule } from './pallet/TbPallet.module';

@Module({
  imports: [UsuarioModule, TbErModule, TbPalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
