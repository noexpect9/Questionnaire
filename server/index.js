const koa = require('koa')
const koaRouter = require('koa-router')
const mockList = require('./mock/index.js')
const app = new koa()
const router = new koaRouter()

async function getRes(fn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = fn()
      resolve(data)
    }, 1000)
  })
}

mockList.forEach(item => {
  const { url, method, response } = item
  router[method](url, async ctx => {
    const res = await getRes(response)
    ctx.body = res
  })
});

app.use(router.routes())
app.listen(8099)

