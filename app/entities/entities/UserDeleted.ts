import {
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  OneToOne } from "typeorm";
import { User } from "./User";

@Entity("user_deleted", { schema: "dbo" })
export class UserDeleted {
  @PrimaryColumn("int", { name: "user_id" })
  userId: number;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
