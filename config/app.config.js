/**
 * @file App config / ES module
 * @module app.config
 */
//网站相关信息
export const meta = {
  title: 'Blog 的博客'
}

//路由对应的图片文字
export const routerMap = {
  category: {
    "code": {
      backgroundImg: " https://www.kedong.me/static/images/app/code.jpg",
      text: "代码",
      icon: "code"
    },
    "think": {
      backgroundImg: " https://www.kedong.me/static/images/app/think.jpg",
      text: "思考",
      icon: "think"
    },
    "life": {
      backgroundImg: " https://www.kedong.me/static/images/app/life.jpg",
      text: "生活",
      icon: "life"
    }
  },
  date: {
    backgroundImg: " https://www.kedong.me/static/images/app/date.jpg",
    icon: "date"
  }
}

