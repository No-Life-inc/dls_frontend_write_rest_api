import { IsOptional, IsString, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UsersDTO } from './UsersDTO';

export class UserInfoDTO {
  @IsOptional()
  userInfoId: number;

  @IsString()
  @IsOptional()
  firstName: string | null;

  @IsString()
  @IsOptional()
  lastName: string | null;

  @IsString()
  @IsOptional()
  imgUrl: string | null;

  @IsString()
  @IsOptional()
  email: string | null;

  @IsDate()
  createdAt: Date;

  @ValidateNested()
  @Type(() => UsersDTO)
  user: UsersDTO;

  constructor(userInfoId: number, firstName: string | null, lastName: string | null, imgUrl: string | null, email: string | null, createdAt: Date, user: UsersDTO) {
    this.userInfoId = userInfoId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
    this.email = email;
    this.createdAt = createdAt;
    this.user = user;
  }
}