import { createConnection, Connection } from "typeorm";
import { Recipe } from "./entity/recipe";

export const connectDb = async () => {
  await createConnection({
    type: "postgres",
    url: "postgresql://postgres:postgres@localhost/react-vienna",
    entities: [Recipe],
    synchronize: true,
  });
};
