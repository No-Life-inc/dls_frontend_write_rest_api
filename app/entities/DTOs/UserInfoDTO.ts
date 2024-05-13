import { IsOptional, IsString, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDTO } from "./UserDTO";
import { UserInfo } from "../entities/UserInfo";

/**
 * Data Transfer Object (DTO) for UserInfo entity.
 * 
 * This DTO is used to transfer data related to a UserInfo entity.
 * 
 * @remarks
 * This DTO contains information about a user's info, including its ID, first name,
 * last name, image URL, email, creation date, and details about the user.
 */
export class UserInfoDTO {
  /**
   * The ID of the user's info.
   * @type {number}
   * @optional
   */
  @IsOptional()
  userInfoId: number;

  /**
   * The first name of the user.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  firstName: string;

  /**
   * The last name of the user.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  lastName: string;

  /**
   * The URL of the image associated with the user.
   * @type {string | null}
   * @optional
   */
  @IsString()
  @IsOptional()
  imgUrl: string | null;

  /**
   * The email of the user.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  email: string;

  /**
   * The creation date of the user's info.
   * @type {Date}
   */
  @IsDate()
  createdAt: Date;

  /**
   * Details about the user.
   * @type {UserDTO}
   * @nested
   */
  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  /**
   * Constructor for UserInfoDTO.
   * @param {UserInfo} userInfo - The UserInfo entity to create DTO from.
   */
  constructor(userInfo: UserInfo) {
    // this.userInfoId = userInfo.userInfoId;
    this.firstName = userInfo.firstName;
    this.lastName = userInfo.lastName;
    this.imgUrl = userInfo.imgUrl;
    this.email = userInfo.email;
    // this.createdAt = userInfo.createdAt;
    // this.user = new UserDTO(userInfo.user);
  }
}
