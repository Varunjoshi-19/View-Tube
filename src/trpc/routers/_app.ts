import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { auth } from '@clerk/nextjs/server';
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async (opts) => {
      const { userId }  = await auth();
      console.log("Hello user " , userId);

      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
    
export type AppRouter = typeof appRouter;