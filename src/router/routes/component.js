import { BASE_LAYOUT } from '@/layouts'

export default {
  path: '/component',
  component: BASE_LAYOUT,
  meta: {
    title: '组件',
  },
  children: [
    {
      path: 'button',
      component: () => import('@/pages/component/button/index.vue'),
      meta: {
        auth: true,
        title: '按钮',
      },
    },
  ],
}
