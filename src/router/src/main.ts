import cors from 'cors'
import {createHTTPServer} from '@trpc/server/adapters/standalone'
import * as t from '@trpc/server'
import * as z from 'zod';

const {procedure, router} = t.initTRPC.context().create()

const _router = router({
  test: procedure.input(z.object({
    test: z.string(),
  })).query(({input}) => {
    return ({
      message: input.test
    })
  })
})

const server = createHTTPServer({
  router:  _router,
  allowBatching: true,
  middleware(req, res, next) {
    return cors({})(req,res,next)
  },
  createContext: ({info,req,res}) => {
    return ({
      info,req,res
    })
  }
})

server.listen(4000,"0.0.0.0").addListener('listening', ()=>{
  console.log("Listening...");
})

export type AppRouter = typeof _router

