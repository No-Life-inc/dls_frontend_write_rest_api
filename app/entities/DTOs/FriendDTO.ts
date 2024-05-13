import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDTO } from "./UserDTO";
import { Friend } from "../entities/Friend";

/**
 * Data Transfer Object (DTO) for Friend entity.
 * 
 * This DTO is used to transfer data related to a Friend entity.
 * 
 * @remarks
 * This DTO contains information about a friendship, including its ID, creation date,
 * users involved in the friendship, and their friends.
 */
export class FriendDTO {
  /**
   * The ID of the friendship.
   * @type {number}
   * @optional
   */
  @IsOptional()
  friendship_id: number;

  /**
   * The creation date of the friendship.
   * @type {Date}
   */
  @IsDate()
  createdAt: Date;

  /**
   * List of users involved in the friendship.
   * @type {UserDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  users: UserDTO[];

  /**
   * List of friends associated with the friendship.
   * @type {UserDTO[]}
   * @nested
   */
  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  friends: UserDTO[];

  /**
   * Constructor for FriendDTO.
   * @param {Friend} friendship - The Friend entity to create DTO from.
   */
  constructor(friendship: Friend) {
    this.friendship_id = friendship.friendship_id;
    this.createdAt = friendship.createdAt;
    this.users = friendship.users.map((user) => new UserDTO(user));
    this.friends = friendship.friends.map((friend) => new UserDTO(friend));
  }
}
