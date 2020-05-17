import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { RecipeResolver } from "./resolver/recipe-resolver";

import { connectDb } from "./db";

async function bootstrap() {
  await connectDb();
  const schema = await buildSchema({
    resolvers: [RecipeResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(4321);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
