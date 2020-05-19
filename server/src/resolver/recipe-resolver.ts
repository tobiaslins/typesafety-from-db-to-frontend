import { Resolver, Query } from "type-graphql";
import { Recipe } from "../entity/recipe";

@Resolver()
export class RecipeResolver {
  @Query((returns) => [Recipe], { nullable: true })
  async recipes(): Promise<Array<Partial<Recipe>> | undefined> {
    const recipes = await Recipe.find();

    return recipes;
  }
}
