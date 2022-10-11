// 封装的是具体的接口请求方法
// 注意 每个方法只负责一个url地址
import request from '@/utils/request'
import store from '@/store'
// 导出接口方法， 为了在逻辑页面引入后调用
export const registerAPI = (obj) => {
  // 原地是一个Promise对象 内部包含原生ajax请求
  // return 这个Promise对象到逻辑层面去 去那边对Promise对象提取结果
  return request({
    url: '/api/reg',
    method: 'POST',
    // axios 的参数 parmas data
    // parmas 的对象参数名和值 axios源码会把参数和值，拼接在url?后面给后台  (query 查询字符串)
    // data 的对象参数名和值 ，axios源码会把参数和值，拼接在请求体里(body参数)
    data: obj
    // data:{username,
    // password,
    // repassword}

  })
}
/**
 *
 * @param {*} param0 {username:用户名 password:密码}
 * @returns
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

export const getUserInfoAPI = () => {
  return request({
    url: '/my/userinfo',
    // 传参给后台  parmas传的是查询字符串query data传的是body请求体 header传的请求头
    headers: {
      Authorization: store.state.token
    }
  })
}
