<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import Retrieve from '@/pages/login/components/retrieve.vue'
import Login from '@/pages/login/components/login.vue'

const message = useMessage()
const form = ref({
  login: {
    account: '',
    password: '',
  },
  register: {
    username: '',
    email: '',
    phone: '',
    type: '',
    password: '',
    reentered: '',
    account: '',
    captcha: '',
    captchaToken: '',
  },
})
</script>

<template>
  <n-space justify="center" align="center" class="h-100vh flex">
    <n-card class="w-300px">
      <n-tabs>
        <n-tab-pane name="sign-in" tab="登录">
          <Login />
        </n-tab-pane>

        <n-tab-pane name="sign-up" tab="注册">
          <n-form>
            <n-input v-model:value="form.register.account" class="mb-6 mt-2" placeholder="账号" />
            <n-input
              v-model:value="form.register.password" class="mb-6" type="password" show-password-on="click" placeholder="密码"
              :input-props="{ autocomplete: 'new-password' }"
            />
            <n-input v-model:value="form.register.email" class="mb-6" placeholder="邮箱" />
            <n-input v-model:value="form.register.phone" class="mb-6" placeholder="手机号" />
            <n-input-group>
              <n-input v-model:value="form.register.code" class="mb-6" placeholder="验证码" />
              <n-button ghost>
                获取验证码
              </n-button>
            </n-input-group>
          </n-form>
          <n-button type="primary" block strong @click="signIn">
            注册
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="retrieve" tab="重装密码">
          <Retrieve />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-space>
</template>

<style scoped>

</style>
