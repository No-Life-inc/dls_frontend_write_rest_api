import { IsOptional, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UsersDTO } from './UsersDTO';

export class BlockedDTO {
  @IsOptional()
  blockedId: number;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => UsersDTO)
  users: UsersDTO[];

  @ValidateNested({ each: true })
  @Type(() => UsersDTO)
  blocked: UsersDTO[];

  constructor(blockedId: number, createdAt: Date, users: UsersDTO[], blocked: UsersDTO[]) {
    this.blockedId = blockedId;
    this.createdAt = createdAt;
    this.users = users;
    this.blocked = blocked;
  }
}