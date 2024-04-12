import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "./User";


@Index("PK__blocked__BEC6BFD992D3612C", ["blockedId"], { unique: true })
@Entity("blocked", { schema: "dbo" })
export class Blocked {
  @PrimaryGeneratedColumn({ type: "int", name: "blocked_id" })
  blockedId: number;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @ManyToMany(() => User, (users) => users.blockedBy)
  users: User[];

  @ManyToMany(() => User, (users) => users.blocked)
  blocked: User[];

}
