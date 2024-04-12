import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDTO } from './UserDTO';
import { UserInfo } from '../entities/UserInfo';

export class UserInfoDTO {
  @IsOptional()
  userInfoId: number;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  imgUrl: string | null;

  @IsString()
  @IsOptional()
  email: string;

  @IsDate()
  createdAt: Date;

  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  constructor(userInfo: UserInfo) {
    this.userInfoId = userInfo.userInfoId;
    this.firstName = userInfo.firstName;
    this.lastName = userInfo.lastName;
    this.imgUrl = userInfo.imgUrl;
    this.email = userInfo.email;
    this.createdAt = userInfo.createdAt;
    this.user = new UserDTO(userInfo.user);
  }
}