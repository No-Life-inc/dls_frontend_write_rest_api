import { IsOptional, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './UserDTO';

export class FriendDTO {
  @IsOptional()
  friendship_id: number;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  users: UserDTO[];

  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  friends: UserDTO[];

  constructor(friendship_id: number, createdAt: Date, users: UserDTO[], friends: UserDTO[]) {
    this.friendship_id = friendship_id;
    this.createdAt = createdAt;
    this.users = users;
    this.friends = friends;
  }
}