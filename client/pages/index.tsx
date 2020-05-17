import { useGetRecipesQuery } from "../graphql/queries/_generated";

export default function Home() {
  const [res] = useGetRecipesQuery();
  return (
    <div className="container mt-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-gray-900 font-bold">Recipes</h1>
      <div className="w-1/2 mt-3">
        {res.data?.recipes?.map((recipe) => (
          <div>
            <div>{recipe.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
