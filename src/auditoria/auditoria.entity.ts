import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'auditorias' })
export class Auditoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ator_id', type: 'int' })
  atorId: number;

  @Column({ type: 'varchar', length: 50 })
  acao: string;

  @Column({ name: 'recurso_tipo', type: 'varchar', length: 50 })
  recursoTipo: string;

  @Column({ name: 'recurso_id', type: 'int' })
  recursoId: number;

  @Column({ name: 'cod_centroCusto', type: 'int' })
  codCentroCusto: number;

  @Column({ name: 'valor_reservado', type: 'int' })
  valorRes: number;

   @Column({ name: 'saldo', type: 'int' })
  saldo: number;

  @Column({ type: 'jsonb', nullable: true })
  detalhes: Record<string, unknown> | null;

  @CreateDateColumn({ name: 'criada_em', type: 'timestamptz' })
  criadaEm: Date;
}