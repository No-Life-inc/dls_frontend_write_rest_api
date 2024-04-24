import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDTO } from "./UserDTO";
import { User } from "../entities/User";

export class UserDeletedDTO {
  @IsOptional()
  userId: number;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  constructor(user: User) {
    // this.userId = user.userId;
    this.createdAt = user.createdAt;
    this.user = new UserDTO(user);
  }
}
