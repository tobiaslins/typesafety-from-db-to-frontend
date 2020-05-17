import { ObjectType, Field, Int } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@ObjectType({ description: "Object representing cooking recipe" })
@Entity("recipe")
export class Recipe extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Column({ type: "jsonb", default: [] })
  ratings: number[];

  @Field({ nullable: true })
  avgRating?: number;
}
