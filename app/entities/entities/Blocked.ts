import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BlockedList } from "./BlockedList";
import { Users } from "./Users";

@Index("PK__blocked__BEC6BFD992D3612C", ["blockedId"], { unique: true })
@Entity("blocked", { schema: "dbo" })
export class Blocked {
  @PrimaryGeneratedColumn({ type: "int", name: "blocked_id" })
  blockedId: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => BlockedList, (blockedList) => blockedList.blockeds)
  @JoinColumn([
    { name: "blocked_list_id", referencedColumnName: "blockedListId" },
  ])
  blockedList: BlockedList;

  @ManyToOne(() => Users, (users) => users.blockeds)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
