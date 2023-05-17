<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const message = useMessage()
const auth = useAuthStore()
const form = ref({
  email: 'admin@test.com',
  password: '123456',
})

function login() {
  auth.fetchToken({
    email: form.value.email,
    password: form.value.password,
  }).then(() => {
    router.push('/')
    message.success('登录成功')
  }).catch((error) => {
    console.log(error)
    message.error(error.message)
  })
}
</script>

<template>
  <n-form>
    <n-input v-model:value="form.email" class="mb-6 mt-2" type="text" placeholder="账号" />
    <n-input v-model:value="form.password" class="mb-6" type="password" show-password-on="click" placeholder="密码" />
  </n-form>
  <n-button type="primary" block strong @click="login()">
    登录
  </n-button>
  <n-divider />
  <div class="flex flex-col items-start">
    <n-button class="mb-2" text type="primary" size="tiny">
      第三方登录
    </n-button>
    <n-button text type="primary" size="tiny">
      忘记密码？
    </n-button>
  </div>
</template>

<style scoped>

</style>
