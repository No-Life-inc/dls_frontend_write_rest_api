import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "./User";

/**
 * Represents the Blocked entity in the database.
 * 
 * @remarks
 * This entity represents users who are blocked by other users.
 */
@Index("PK__blocked__BEC6BFD992D3612C", ["blockedId"], { unique: true })
@Entity("blocked", { schema: "dbo" })
export class Blocked {
  /**
   * The primary key of the Blocked entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "blocked_id" })
  blockedId: number;

  /**
   * The creation date of the blocked entity.
   * @type {Date}
   */
  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()" })
  createdAt: Date;

  /**
   * The users who are blocked by others.
   * @type {User[]}
   */
  @ManyToMany(() => User, (users) => users.blockedBy)
  users: User[];

  /**
   * The users who blocked others.
   * @type {User[]}
   */
  @ManyToMany(() => User, (users) => users.blocked)
  blocked: User[];

}
