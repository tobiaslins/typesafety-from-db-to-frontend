import { Resolver, Query } from "type-graphql";
import { Recipe } from "../entity/recipe";

@Resolver()
export class RecipeResolver {
  @Query((returns) => [Recipe], { nullable: true })
  async recipes(): Promise<Array<Recipe> | undefined> {
    return await Recipe.find();
  }
}
