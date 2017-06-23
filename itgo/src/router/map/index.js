

let index=(resolve) => resolve(require('views/index'));
let history=(resolve) => resolve(require('views/history'));
let preferential=(resolve) => resolve(require('views/preferential'));


let login=(resolve) => resolve(require('views/auth'));
let login_index=(resolve) => resolve(require('views/auth/login'));
let login_register =(resolve) => resolve(require('views/auth/register'))

export default [
  {
    path:"/index",
    name:"index",
    component:index,
  },
  {
    path:"/login",
    component:login,
    redirect:"/login/index",
    children:[
      {
        path:"index",
        component:login_index,
        meta:{
            needFalseLogin:true //登录后不允许进入
        }
      },
      {
        path:"register",
        component:login_register,
        meta:{
          needFalseLogin:true //登录后不允许进入
        }
      }
    ]
  },
  {
    path:"*",
    redirect:"./index"
  }
]
