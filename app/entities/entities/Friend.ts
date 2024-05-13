import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

/**
 * Represents the Friend entity in the database.
 * 
 * @remarks
 * This entity represents friendships between users.
 */
@Index("PK__friends__3FA1E15546C7C974", ["friendship_id"], { unique: true })
@Entity("friends", { schema: "dbo" })
export class Friend {
  /**
   * The primary key of the Friend entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "friendship_id" })
  friendship_id: number;

  /**
   * The creation date of the friendship.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()" })
  createdAt: Date;

  /**
   * The users involved in the friendship.
   * @type {User[]}
   */
  @ManyToMany(() => User, (users) => users.user)
  users: User[];

  /**
   * The friends of the user.
   * @type {User[]}
   */
  @ManyToMany(() => User, (users) => users.friends)
  friends: User[];

}
