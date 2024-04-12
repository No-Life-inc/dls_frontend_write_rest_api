import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";


@Index("PK__friends__3FA1E15546C7C974", ["friendshipId"], { unique: true })
@Entity("friends", { schema: "dbo" })
export class Friend {
  @PrimaryGeneratedColumn({ type: "int", name: "friendship_id" })
  friendship_id: number;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @ManyToMany(() => User, (users) => users.user)
  users: User[];

  @ManyToMany(() => User, (users) => users.friends)
  friends: User[];

}