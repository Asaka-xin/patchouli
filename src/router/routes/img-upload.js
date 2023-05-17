import { BASE_LAYOUT } from '@/layouts'

export default {
  path: '/img/upload',
  component: BASE_LAYOUT,
  children: [
    {
      path: '',
      component: () => import('@/pages/img-upload/index.vue'),
      meta: {
        title: '图片',
        authenticated: false,
      },
    }],
}
