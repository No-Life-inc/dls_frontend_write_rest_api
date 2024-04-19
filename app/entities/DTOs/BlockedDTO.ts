import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDTO } from "./UserDTO";
import { Blocked } from "../entities/Blocked";

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

  constructor(blocked: Blocked) {
    this.blockedId = blocked.blockedId;
    this.createdAt = blocked.createdAt;
    this.users = blocked.users.map((user) => new UserDTO(user));
    this.blocked = blocked.blocked.map((blocked) => new UserDTO(blocked));
  }
}
