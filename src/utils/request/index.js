import { createAxiosInstance } from './instance'

const request = createAxiosInstance({
  timeout: 5000,
  baseURL: '/api',
})

const mock = createAxiosInstance({
  timeout: 5000,
  baseURL: '/mock',
})

export const api = {
  request,
  mock,
}
