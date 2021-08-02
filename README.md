# blog-nuxt

> My kickass Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

我们需要对启动ip进行一下设置。

比如 主机ip一定要是：“0.0.0.0” 

一定不能是localhost或者127.0.0.1 否则部署到服务器上后其他客户端无法访问，只能本服务器使用localhost:3000访问
"config": {
    "nuxt": {
      "host": "0.0.0.0",
      "port": 3000
    }
},

https://blog.jijian.link/2020-12-09/nginx-proxy-nuxtjs-404/
nginx 代理二级目录访问 nuxtjs 项目 404 错误

asyncData必须在 page component里才会被执行，指的是page目录
非page component 使用vuex

<client-only> 此组件用于仅在客户端渲染其他组件
