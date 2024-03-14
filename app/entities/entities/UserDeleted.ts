import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity("user_deleted", { schema: "dbo" })
export class UserDeleted {
  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Users, (users) => users.userDeleteds)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
