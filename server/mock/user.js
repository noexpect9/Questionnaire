const Mock = require('mockjs')

const Random = Mock.Random
module.exports = [
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return {
        code: 20000,
        data: {
          token: Random.string(32),
        },
      }
    },
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 20000,
        data: {
          username: 'admin',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          nickname: 'admin',
        },
      }
    },
  },
  {
    url: '/api/user/register',
    method: 'post',
    response: () => {
      return {
        code: 20000,
        data: {
        },
      }
    },
  },
]