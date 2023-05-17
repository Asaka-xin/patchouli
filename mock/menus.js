export default [
  {
    url: '/api/menus',
    method: 'get',
    response: () => {
      return [
        {
          id: 101,
          label: '首页',
          icon: 'home',
          path: '/dashboard',
        },
        {
          id: 102,
          label: '用户',
          icon: 'user',
          children: [
            {
              id: 10201,
              label: '活动用户',
              path: '/system/user',
            },
            {
              id: 10202,
              label: '角色管理',
              path: '/system/role',
            },
          ],
        },
        {
          id: 103,
          label: '商品',
          icon: 'extension',
          path: '/goods',
        },
        {
          id: 104,
          label: '图片',
          icon: 'upload',
          path: '/img/upload',
        },
        {
          id: 105,
          label: '异常',
          icon: 'extension',
          children: [
            {
              id: 10501,
              label: '404',
              path: '/exception/404',
            },
            {
              id: 10502,
              label: '403',
              path: '/exception/403',
            },
            {
              id: 10503,
              label: '500',
              path: '/exception/500',
            },
          ],
        },
        {
          id: 106,
          label: '组件',
          icon: 'extension',
          children: [
            {
              id: 10601,
              label: '按钮',
              path: '/component/button',
            },
          ],
        },
      ]
    },
  },
]
