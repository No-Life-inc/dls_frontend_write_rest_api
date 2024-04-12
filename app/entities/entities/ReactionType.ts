import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reaction } from "./Reaction";

@Index("PK__reaction__4D63FB6A03226554", ["reactionTypeId"], { unique: true })
@Entity("reaction_type", { schema: "dbo" })
export class ReactionType {
  @PrimaryGeneratedColumn({ type: "int", name: "reaction_type_id" })
  reactionTypeId: number;

  @Column("nvarchar", {
    name: "reaction_type_name",
    nullable: true,
    length: 255,
  })
  reactionTypeName: string;

  @Column("nvarchar", {
    name: "reaction_type_img",
    nullable: true,
    length: 255,
  })
  reactionTypeImg: string;

  @OneToMany(() => Reaction, (reactions) => reactions.reactionType)
  reactions: Reaction[];
}
