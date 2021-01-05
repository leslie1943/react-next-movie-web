const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

// 通过调用 handler() 就可以实现提供的路由系统了
const handler = app.getRequestHandler()

// prepare: 准备 next 应用
// 准备完成后返回一个 Promise, 可以调用 .then
app.prepare().then(() => {
  // 创建服务器
  const server = express()

  // 💛💛💛💛 自定义路由
  server.get('/hello', (req, res) => {
    res.send('hello Next.js')
  })

  server.get('*', (req, res) => {
    // handler 的处理逻辑就是当自定义的路由,没有匹配到的时候,交给handler去处理
    // handler 调用内部的基于页面的路由系统来处理
    handler(req, res)
  })

  // 端口, 相当于重写 dev 命令的那个启动命令
  server.listen(3000, () => {
    console.info('Server is running at http://locahost:3000')
  })
})
