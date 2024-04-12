import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./User";

@Index("PK__user_inf__82ABEB54C83549E9", ["userInfoId"], { unique: true })
@Entity("user_info", { schema: "dbo" })
export class UserInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "user_info_id" })
  userInfoId: number;

  @Column("nvarchar", { name: "first_name", nullable: true, length: 255 })
  firstName: string | null;

  @Column("nvarchar", { name: "last_name", nullable: true, length: 255 })
  lastName: string | null;

  @Column("nvarchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;

  @Column("nvarchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("datetime", { name: "created_at", nullable: false, default: () => "getdate()"})
  createdAt: Date;

  @OneToOne(() => Users)
  @JoinColumn()
  user: Users
}
