import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers });
  //TODO: fix cors setting ()
  const server = new ApolloServer({
    schema,
    cors: {
      origin: "*",
      credentials: true,
    },
  });
  await server.listen(4000);
}

main().catch((err) => {
  console.error(err);
});
