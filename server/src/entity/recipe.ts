import { ObjectType, Field, Int, Float } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@ObjectType({ description: "Object representing cooking recipe" }) // graphql
@Entity("recipe") // database
export class Recipe extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  // @Column({ type: "jsonb", default: [] })
  // ratings: number[];

  // @Field((type) => Float, { nullable: true })
  // get averageRating(): number | null {
  //   return average(this.ratings);
  // }
}

const average = (arr: number[]) => {
  const ratingsCount = arr.length;
  if (ratingsCount === 0) {
    return null;
  }
  const ratingsSum = arr.reduce((a, b) => a + b, 0);
  return ratingsSum / ratingsCount;
};
