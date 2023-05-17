import { BASE_LAYOUT } from '@/layouts'

export default {
  path: '/profile',
  component: BASE_LAYOUT,
  children: [
    {
      path: '',
      component: () => import('@/pages/profile/index.vue'),
      meta: {
        title: '个人',
        authenticated: false,
      },
    }],
}
