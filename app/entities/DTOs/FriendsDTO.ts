import { IsOptional, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UsersDTO } from './UsersDTO';

export class FriendsDTO {
  @IsOptional()
  friendship_id: number;

  @IsDate()
  createdAt: Date;

  @ValidateNested({ each: true })
  @Type(() => UsersDTO)
  users: UsersDTO[];

  @ValidateNested({ each: true })
  @Type(() => UsersDTO)
  friends: UsersDTO[];

  constructor(friendship_id: number, createdAt: Date, users: UsersDTO[], friends: UsersDTO[]) {
    this.friendship_id = friendship_id;
    this.createdAt = createdAt;
    this.users = users;
    this.friends = friends;
  }
}