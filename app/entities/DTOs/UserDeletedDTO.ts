import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDTO } from "./UserDTO";
import { User } from "../entities/User";

/**
 * Data Transfer Object (DTO) for UserDeleted entity.
 * 
 * This DTO is used to transfer data related to a deleted user entity.
 * 
 * @remarks
 * This DTO contains information about a deleted user, including its ID, creation date,
 * and details about the user.
 */
export class UserDeletedDTO {
  /**
   * The ID of the deleted user.
   * @type {number}
   * @optional
   */
  @IsOptional()
  userId: number;

  /**
   * The creation date of the deleted user.
   * @type {Date}
   * @optional
   */
  @IsDate()
  @IsOptional()
  createdAt: Date;

  /**
   * Details about the deleted user.
   * @type {UserDTO}
   * @nested
   */
  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  /**
   * Constructor for UserDeletedDTO.
   * @param {User} user - The User entity representing the deleted user.
   */
  constructor(user: User) {
    // this.userId = user.userId;
    this.createdAt = user.createdAt;
    this.user = new UserDTO(user);
  }
}
