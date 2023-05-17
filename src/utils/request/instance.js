import axios from 'axios'
import { useLocalStorage } from '@/utils'
import api from '@/server/api'

/**
 * @description: 创建axios实例，可根据不同的配置创建多个实例
 * @param options 实例配置项：baseURL, timeout, headers, ...
 * @returns {AxiosInstance}
 */
export function createAxiosInstance(options = {}) {
  const instance = axios.create({ ...options })
  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前：设置请求头、添加请求参数、处理跨域问题等
      if (config.headers) {
        const token = useLocalStorage.get('accessToken')
        config.headers.Authorization = token ? `Bearer ${token}` : ''
      }
      return config
    },
    (error) => {
      // 对请求错误做些什么
      return handleError(error)
    },
  )

  // 响应拦截器
  instance.interceptors.response.use(
    async (response) => {
      // 对响应数据做点什么：检查响应状态码、解析响应数据等
      const { status } = response
      if (status >= 200 && status < 300 || status === 304) {
        const data = response.data
        // 请求成功
        if (data.code === 0)
          return Promise.resolve(data.data)

        // 令牌过期，刷新令牌
        if (data.code === 10401) {
          const config = await refreshToken(response.config)
          if (config)
            return instance.request(config)
        }
        return Promise.reject({ code: data.code, message: data.message })
      }

      return Promise.reject({ code: status, message: response.statusText })
    },
    (error) => {
      // 对响应错误做些什么
      return handleError(error)
    },
  )
  return instance
}

function handleError(error) {
  // 网络错误
  if (!window.navigator.onLine || error.message === 'Network Error')
    return Promise.reject({ code: 'NETWORK_ERROR', message: '网络错误' })

  // 超时错误
  if (error.code === 'ECONNABORTED' && error.message.includes('timeout'))
    return Promise.reject({ code: error.code, message: '请求超时' })

  // 请求错误
  if (error.response)
    return Promise.reject({ code: error.response.status, message: error.response.statusText })

  return Promise.reject({ code: 'UNKNOWN_ERROR', message: '未知错误' })
}

async function refreshToken(config) {
  const refreshToken = useLocalStorage.get('refreshToken')
  // 如果 refreshToken 不存在，则需要重新登录
  if (!refreshToken)
    return Promise.reject({ code: 'REFRESH_TOKEN_INVALID', message: '请重新登录' })
  return await api.auth.fetchToken({ refreshToken })
    .then((response) => {
      if (response) {
        const { accessToken, refreshToken } = response
        useLocalStorage.set('accessToken', accessToken)
        useLocalStorage.set('refreshToken', refreshToken)
        if (config.headers)
          config.headers.Authorization = `Bearer ${accessToken}`
        return config
      }
    })
    .catch(() => {
      // 如果 refreshToken 失效，则需要重新登录
      useLocalStorage.remove('accessToken')
      useLocalStorage.remove('refreshToken')
      return Promise.reject({ code: 'REFRESH_TOKEN_INVALID', message: '请重新登录' })
    })
}
