/* eslint-disable prettier/prettier */
import { Usuario } from 'src/usuario/model/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class TbEr {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'numero_er', length: 50 })
  numeroEr: string;

  @Column({ name: 'data_registro', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataRegistro: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
}