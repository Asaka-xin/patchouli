<script setup>
const type = ['default', 'tertiary', 'primary', 'info', 'success', 'warning', 'error']
const level = [{}, { secondary: true }, { tertiary: true }, { quaternary: true }, { dashed: true }, { ghost: true }, { round: true }, { circle: true }]
</script>

<template>
  <n-space vertical>
    <n-card v-for="lv in level">
      <n-space>
        <n-button v-for="item in type" v-bind="{ type: item, ...lv }">
          {{ lv.circle ? item.charAt(0).toUpperCase() : item }}
        </n-button>
      </n-space>
    </n-card>
  </n-space>
</template>

<style scoped></style>
