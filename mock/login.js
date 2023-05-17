export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          token: 'admin',
        },
      }
    },
  },
]
