import * as path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { makePrismaSchema } from 'nexus-prisma';
import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import * as types from './resolvers';

const schema = makePrismaSchema({
  types,

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
});

const server = new GraphQLServer({
  schema,
  context: { prisma },
});

server.start();
