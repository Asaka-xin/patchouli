const userList = [
  {
    user: {
      id: 1,
      username: 'admin',
      email: 'admin@test.com',
      password: '123456',
      avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=2638836154&spec=640&img_type=jpg',
      role: [
        {
          id: 1,
          name: 'admin',
          description: '管理员',
          permissions: [],
          menus: [],
        },
      ],
    },
    accessToken: 'ACCESS_TOKEN',
    refreshToken: 'REFRESH_TOKEN',
  },
]
export default [
  {
    url: '/mock/auth/token',
    method: 'post',
    response: ({ url, body, query, headers }) => {
      console.log(body)
      const { phone, email, password, loginType, grantType, refreshToken } = body
      if (grantType === 'refresh_token') {
        const token = userList.find(item => item.refreshToken === refreshToken)
        if (token) {
          return {
            code: 0,
            message: 'success',
            data: {
              accessToken: token.accessToken,
              refreshToken: token.refreshToken,
            },
          }
        }
      }
      if (loginType === 'email') {
        const user = userList.find(item => item.user.email === email && item.user.password === password)
        if (user) {
          return {
            code: 0,
            message: 'success',
            data: {
              accessToken: user.accessToken,
              refreshToken: user.refreshToken,
            },
          }
        }
        return {
          code: 10401,
          message: '账号或密码错误',
        }
      }
      return {
        code: 10400,
        message: '请求参数不正确',
      }
    },
  },
  {
    url: '/mock/user',
    method: 'get',
    response: ({ headers }) => {
      let { authorization = '' } = headers
      console.log(authorization)
      authorization = authorization.replace('Bearer ', '')
      if (!authorization) {
        return {
          code: 10401,
          message: '没有访问令牌，请先登录',
        }
      }
      const user = userList.find(item => item.accessToken === authorization)
      if (!user) {
        return {
          code: 10401,
          message: '请先登录',
        }
      }
      if (user) {
        return {
          code: 0,
          message: 'success',
          data: {
            id: user.user.id,
            username: user.user.username,
            email: user.user.email,
            avatar: user.user.avatar,
            role: user.user.role,
          },
        }
      }
    },
  },
  {
    url: '/mock/captcha/sms',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: true,
      }
    },
  },
  {
    url: '/mock/captcha/email',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: true,
      }
    },
  },
]
