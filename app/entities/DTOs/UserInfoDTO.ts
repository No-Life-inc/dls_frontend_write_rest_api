import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UsersDTO } from './UserDTO';

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
  @Type(() => UsersDTO)
  user: UsersDTO;

  constructor(userInfoId: number, firstName: string, lastName: string, imgUrl: string | null, email: string, createdAt: Date, user: UsersDTO) {
    this.userInfoId = userInfoId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
    this.email = email;
    this.createdAt = createdAt;
    this.user = user;
  }
}