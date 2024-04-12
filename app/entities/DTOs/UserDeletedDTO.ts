import { IsOptional, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UsersDTO } from './UserDTO';

export class UserDeletedDTO {
  @IsOptional()
  userId: number;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ValidateNested()
  @Type(() => UsersDTO)
  user: UsersDTO;

  constructor(userId: number, createdAt: Date, user: UsersDTO) {
    this.userId = userId;
    this.createdAt = createdAt;
    this.user = user;
  }
}