import { BASE_LAYOUT } from '@/layouts'

export default {
  path: '/dashboard',
  component: BASE_LAYOUT,
  children: [
    {
      path: '',
      component: () => import('@/pages/dashboard/index.vue'),
      meta: {
        title: '首页',
        authenticated: true,
      },
    }],
}
