


import ajax from 'api/authService';
// 权限拦截
export default (to,from,next) =>{
  console.log(to,from)
  return next();

}
// if(needFalseLogin&&needFalseLogin==true&&!==true){ // 登录后不允许进入
//
//   if(store.state.islogin){ //不允许重新跳到登录页面
//     next("/index");
//   }
//   else{
//     next();
//   }
