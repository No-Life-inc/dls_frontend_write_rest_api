import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./User";


@Index("PK__friends__3FA1E15546C7C974", ["friendshipId"], { unique: true })
@Entity("friends", { schema: "dbo" })
export class Friends {
  @PrimaryGeneratedColumn({ type: "int", name: "friendship_id" })
  friendship_id: number;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @ManyToMany(() => Users, (users) => users.user)
  users: Users[];

  @ManyToMany(() => Users, (users) => users.friends)
  friends: Users[];

}