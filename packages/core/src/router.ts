import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();
export const appRouter = t.router({
    getUser: t.procedure.input(z.string()).query((opts) => {
        return {
            id: opts.input,
            name: 'Bilbo'
        };
    }),
});

export type AppRouter = typeof appRouter;
