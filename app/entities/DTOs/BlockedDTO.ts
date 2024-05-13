import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDTO } from "./UserDTO";
import { Blocked } from "../entities/Blocked";

/**
 * Represents a Data Transfer Object (DTO) for Blocked entity.
 * 
 * This DTO is used to transfer data related to a Blocked entity.
 * 
 * @remarks
 * This DTO is responsible for carrying data related to the Blocked entity,
 * including the ID, creation date, and lists of users and blocked users.
 */
export class BlockedDTO {
  /**
   * The ID of the blocked entry.
   * @type {number}
   * @optional
   */
  @IsOptional()
  blockedId: number;

  /**
   * The creation date of the blocked entry.
   * @type {Date}
   */
  @IsDate()
  createdAt: Date;

  /**
   * List of users related to this blocked entry.
   * @type {UserDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  users: UserDTO[];

  /**
   * List of users who are blocked.
   * @type {UserDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  blocked: UserDTO[];

  /**
   * Constructor for BlockedDTO.
   * @param {Blocked} blocked - The Blocked entity to create DTO from.
   */
  constructor(blocked: Blocked) {
    // this.blockedId = blocked.blockedId;
    this.createdAt = blocked.createdAt;
    this.users = blocked.users.map((user) => new UserDTO(user));
    this.blocked = blocked.blocked.map((blocked) => new UserDTO(blocked));
  }
}
