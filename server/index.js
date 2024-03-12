const koa = require('koa')
const koaRouter = require('koa-router')
const mockList = require('./mock/index.js')
const app = new koa()
const cors = require('koa-cors');
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
app.use(cors({
  origin: 'http://localhost:3000', // 允许的源地址
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的 HTTP 方法
  allowHeaders: ['Content-Type', 'Authorization'], // 允许的 HTTP 头
}));
app.use(router.routes())
app.listen(8099)

