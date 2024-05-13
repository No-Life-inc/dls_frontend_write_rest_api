import {
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  OneToOne
} from "typeorm";
import { User } from "./User";

/**
 * Represents a soft-deleted user entity in the database.
 * 
 * @remarks
 * This entity represents a soft-deleted user, containing information about the deletion event and a reference to the deleted user.
 */
@Entity("user_deleted", { schema: "dbo" })
export class UserDeleted {
  /**
   * The primary key of the UserDeleted entity, which is also the ID of the deleted user.
   * @type {number}
   */
  @PrimaryColumn("int", { name: "user_id" })
  userId: number;

  /**
   * The date and time when the user was soft-deleted.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()" })
  createdAt: Date;

  /**
   * The reference to the user that was soft-deleted.
   * @type {User}
   */
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
