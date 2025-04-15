import {createTRPCClient, httpBatchLink} from '@trpc/client'
// @ts-ignore
import {AppRouter} from '../../../router/src/main'

export const client = createTRPCClient<AppRouter>(
  {
    links:[httpBatchLink({url:"http://localhost:4000"})],
  }
)