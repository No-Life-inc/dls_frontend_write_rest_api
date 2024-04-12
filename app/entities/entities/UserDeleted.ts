import {
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  OneToOne } from "typeorm";
import { Users } from "./User";

@Entity("user_deleted", { schema: "dbo" })
export class UserDeleted {
  @PrimaryColumn("int", { name: "user_id" })
  userId: number;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @OneToOne(() => Users)
  @JoinColumn()
  user: Users
}
