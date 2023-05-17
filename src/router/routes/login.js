import { BLANK_LAYOUT } from '@/layouts'

export default {
  path: '/login',
  component: BLANK_LAYOUT,
  children: [
    {
      path: '',
      component: () => import('@/pages/login/index.vue'),
      meta: {
        title: '登录',
        authenticated: false,
      },
    }],
}
