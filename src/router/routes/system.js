import { BASE_LAYOUT } from '@/layouts'

export default {
  path: '/system',
  component: BASE_LAYOUT,
  meta: {
    title: '系统管理',
  },
  children: [
    {
      path: 'user',
      component: () => import('@/pages/user/index.vue'),
      meta: {
        authenticated: true,
        title: '用户管理',
      },
    },
    {
      path: 'role',
      component: () => import('@/pages/role/index.vue'),
      meta: {
        authenticated: true,
        title: '角色管理',
      },
    },
  ],
}
