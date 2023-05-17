import { request } from '@/utils'
import * as auth from '@/server/api/auth'

export default {
  auth,
  fetchMenus: () => request.get('/api/menus'),
  fetchUser: () => request.get('/api/user'),
  logout: () => request.post('/api/logout'),
  login: () => request.post('/api/login'),
}
