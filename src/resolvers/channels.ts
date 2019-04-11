import { queryType } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

import { Context } from '../types';

export const Channel = prismaObjectType({
  name: 'Channel',
  definition(t) {
    t.prismaFields(['*']);
  },
});

export const Query = queryType({
  definition(t) {
    t.list.field('testChannels', {
      type: 'Channel',
      resolve: (parent, args, ctx) => ctx.prisma.channels(),
    });
  },
});
