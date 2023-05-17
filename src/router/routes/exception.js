import { BASE_LAYOUT } from '@/layouts'

export default {
  path: '/exception',
  component: BASE_LAYOUT,
  meta: {
    title: '异常',
  },
  children: [
    {
      path: '404',
      component: () => import('@/pages/exception/404/index.vue'),
      meta: {
        title: '404',
      },
    },
    {
      path: '403',
      component: () => import('@/pages/exception/403/index.vue'),
      meta: {
        title: '403',
      },
    },
    {
      path: '500',
      component: () => import('@/pages/exception/500/index.vue'),
      meta: {
        title: '500',
      },
    },
  ],
}
