import { api } from '@/utils/request'

/**
 * 获取令牌
 * @param phone - 手机
 * @param email - 邮箱
 * @param password - 密码
 * @param refreshToken - 刷新令牌
 * @description 通过 表单登录 或 只传入刷新令牌 获取新的 accessToken 和 refreshToken
 */
function fetchToken({ phone, email, password, refreshToken } = {}) {
  return api.mock.post('/auth/token', {
    phone,
    email,
    password,
    loginType: refreshToken ? undefined : email ? 'email' : 'phone',
    grantType: refreshToken ? 'refresh_token' : undefined,
    refreshToken,
  })
}

/**
 * 获取用户信息
 */
const fetchUser = () => api.mock.get('/user')

/**
 * 获取用户路由数据
 * @param id - 用户id
 * @description 根据用户id查询对应角色的路由数据
 */
const fetchRoutes = id => api.mock.get(`/routes/${id}`)

/**
 * 获取验证码
 * @param phone
 * @description 验证码是否发送成功
 */
const fetchCaptchaSMS = phone => api.mock.post('/captcha/sms', { phone })

/**
 * 获取验证码
 * @param email
 * @description 验证码是否发送成功
 */
const fetchCaptchaEmail = email => api.mock.post('/captcha/email', { email })

export { fetchToken, fetchUser, fetchRoutes, fetchCaptchaSMS, fetchCaptchaEmail }
