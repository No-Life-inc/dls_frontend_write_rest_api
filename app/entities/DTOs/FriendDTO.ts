import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDTO } from "./UserDTO";
import { Friend } from "../entities/Friend";

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

  constructor(friendship: Friend) {
    this.friendship_id = friendship.friendship_id;
    this.createdAt = friendship.createdAt;
    this.users = friendship.users.map((user) => new UserDTO(user));
    this.friends = friendship.friends.map((friend) => new UserDTO(friend));
  }
}
