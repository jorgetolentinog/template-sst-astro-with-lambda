import { createTRPCProxyClient, httpLink } from '@trpc/client';
import type { AppRouter } from 'core/src/router';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: `${import.meta.env.PUBLIC_API_URL}/trpc`,
    }),
  ],
});
