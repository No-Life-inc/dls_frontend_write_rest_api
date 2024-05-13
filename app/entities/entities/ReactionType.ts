import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Reaction } from "./Reaction";

/**
 * Represents the ReactionType entity in the database.
 * 
 * @remarks
 * This entity represents different types of reactions.
 */
@Index("PK__reaction__4D63FB6A03226554", ["reactionTypeId"], { unique: true })
@Entity("reaction_type", { schema: "dbo" })
export class ReactionType {
  /**
   * The primary key of the ReactionType entity.
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int", name: "reaction_type_id" })
  reactionTypeId: number;

  /**
   * The name of the reaction type.
   * @type {string}
   */
  @Column("nvarchar", {
    name: "reaction_type_name",
    nullable: true,
    length: 255,
  })
  reactionTypeName: string;

  /**
   * The URL of the image representing the reaction type.
   * @type {string}
   */
  @Column("nvarchar", {
    name: "reaction_type_img",
    nullable: true,
    length: 255,
  })
  reactionTypeImg: string;

  /**
   * The reactions associated with this reaction type.
   * @type {Reaction[]}
   */
  @OneToMany(() => Reaction, (reactions) => reactions.reactionType)
  reactions: Reaction[];
}
