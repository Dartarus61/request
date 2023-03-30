import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Request } from './request.model';
import { User } from './user.model';

@Table({ tableName: 'Subcriptions', timestamps: true, freezeTableName: true })
export class Subcription extends Model<Subcription> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Request)
  @Column
  requestId: number;
}
