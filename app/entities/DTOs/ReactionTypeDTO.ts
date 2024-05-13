import { IsString, IsOptional } from 'class-validator';
import { ReactionType } from '../entities/ReactionType';

/**
 * Data Transfer Object (DTO) for ReactionType entity.
 * 
 * This DTO is used to transfer data related to a ReactionType entity.
 * 
 * @remarks
 * This DTO contains information about a reaction type, including its name and image.
 */
export class ReactionTypeDTO {
  /**
   * The name of the reaction type.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  reactionTypeName: string;

  /**
   * The URL of the image associated with the reaction type.
   * @type {string}
   * @optional
   */
  @IsString()
  @IsOptional()
  reactionTypeImg: string;

  /**
   * Constructor for ReactionTypeDTO.
   * @param {ReactionType} reactionType - The ReactionType entity to create DTO from.
   */
  constructor(reactionType: ReactionType) {
    this.reactionTypeName = reactionType.reactionTypeName;
    this.reactionTypeImg = reactionType.reactionTypeImg;
  }
}