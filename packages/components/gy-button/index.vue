<template>
  <el-button class="gy-button">
    <slot>我是按钮</slot>
  </el-button>
</template>

<script setup>
import {ElButton} from "element-plus";
</script>

<style lang="css" scoped>
.gy-button {
  color: red
}
</style>
