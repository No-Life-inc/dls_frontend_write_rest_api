import { IsOptional, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './UserDTO';

export class BlockedDTO {
  @IsOptional()
  blockedId: number;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  users: UserDTO[];

  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  blocked: UserDTO[];

  constructor(blockedId: number, createdAt: Date, users: UserDTO[], blocked: UserDTO[]) {
    this.blockedId = blockedId;
    this.createdAt = createdAt;
    this.users = users;
    this.blocked = blocked;
  }
}