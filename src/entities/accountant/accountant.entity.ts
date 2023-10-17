import { IsIn, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OPERATION_TYPE } from './types';

@Entity('accountant')
export class Accountant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category ', type: 'varchar', nullable: false })
  category: string;

  @Column({ name: 'amount', type: 'varchar', nullable: false })
  amount: string;

  @Column({ name: 'currency', type: 'varchar', nullable: false })
  currency: string;

  @Column({ name: 'date', type: 'varchar', nullable: false })
  date: Date;

  @Column({ name: 'operationType', type: 'varchar', nullable: false })
  @IsIn([OPERATION_TYPE.Income, OPERATION_TYPE.Expence], {
    message: 'Invalid operation type',
  })
  operationType: string;

  @Column({ name: 'description', type: 'varchar' })
  @IsNotEmpty({ message: 'Description cannot be empty' })
  description: string;
}
