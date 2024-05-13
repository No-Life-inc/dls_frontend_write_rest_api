import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

/**
 * Represents user information stored in the database.
 * 
 * @remarks
 * This entity stores additional information about users, such as their first name, last name, profile image URL, and email.
 */
@Index("PK__user_inf__82ABEB54C83549E9", ["userInfoId"], { unique: true })
@Entity("user_info", { schema: "dbo" })
export class UserInfo {
  /**
   * The primary key of the UserInfo entity, representing the ID of the user information.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "user_info_id" })
  userInfoId: number;

  /**
   * The first name of the user.
   * @type {string}
   */
  @Column("nvarchar", { name: "first_name", nullable: true, length: 255 })
  firstName: string;

  /**
   * The last name of the user.
   * @type {string}
   */
  @Column("nvarchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string;

  /**
   * The URL of the user's profile image.
   * @type {string | null}
   */
  @Column("nvarchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;

  /**
   * The email address of the user.
   * @type {string}
   */
  @Column("nvarchar", { name: "email", nullable: true, length: 255 })
  email: string;

  /**
   * The date and time when the user information was created.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()" })
  createdAt: Date;

  /**
   * The reference to the user associated with this user information.
   * @type {User}
   */
  @ManyToOne(() => User, user => user.userInfos)
  @JoinColumn({ name: "user_id" }) // This should match the column name in your database
  user: User;
}
