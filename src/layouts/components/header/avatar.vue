<script setup>
import { Logout, UserAvatar } from '@vicons/carbon'
import { useRouter } from 'vue-router'
import { renderIcon } from '@/utils'
import { useAuthStore } from '@/stores'

const auth = useAuthStore()
const router = useRouter()
function logout() {
  useAuthStore().resetAuth()
  const { authenticated } = router.currentRoute.value.meta
  if (authenticated)
    router.push('/login')
}

const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserAvatar),
    props: {
      onClick: () => router.push('/profile'),
    },
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(Logout),
    props: {
      onClick: () => logout(),
    },
  },
]
</script>

<template>
  <n-dropdown :options="options">
    <n-space>
      <n-button text class="h-8">
        {{ auth.user.username }}
      </n-button>
      <n-button text class="h-8">
        <n-avatar round :size="40" :src="auth.user.avatar" />
      </n-button>
    </n-space>
  </n-dropdown>
</template>

<style scoped>

</style>
