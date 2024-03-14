import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Blocked } from "./Blocked";
import { Users } from "./Users";

@Index("PK__blocked___3CAEB2B0655A8F09", ["blockedListId"], { unique: true })
@Entity("blocked_list", { schema: "dbo" })
export class BlockedList {
  @PrimaryGeneratedColumn({ type: "int", name: "blocked_list_id" })
  blockedListId: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @OneToMany(() => Blocked, (blocked) => blocked.blockedList)
  blockeds: Blocked[];

  @ManyToOne(() => Users, (users) => users.blockedLists)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
