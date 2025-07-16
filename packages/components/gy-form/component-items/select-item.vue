<template>
  <el-select>
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>

<script setup>
import { ElSelect, ElOption } from 'element-plus'

defineProps({
  options: {
    type: Array,
    default: () => [],
  },
})
</script>
