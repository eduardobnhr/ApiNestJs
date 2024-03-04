/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TbPallet {
  @PrimaryGeneratedColumn()
  id_pallet: number;

  @Column({ name: 'codigos_barras', length: 50 })
  numeroEr: string;

  @Column({ name: 'data_registro', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataRegistro: Date;
}