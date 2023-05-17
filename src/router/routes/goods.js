import { BASE_LAYOUT } from '@/layouts'

export default {
  path: '/goods',
  component: BASE_LAYOUT,
  children: [
    {
      path: '',
      component: () => import('@/pages/goods/index.vue'),
      meta: {
        title: '商品',
        authenticated: false,
      },
    }],
}
