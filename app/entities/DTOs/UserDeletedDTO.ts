import { IsOptional, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO as UserDTO } from './UserDTO';

export class UserDeletedDTO {
  @IsOptional()
  userId: number;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  constructor(userId: number, createdAt: Date, user: UserDTO) {
    this.userId = userId;
    this.createdAt = createdAt;
    this.user = user;
  }
}