<template>
  <component :is="getComponentType($attrs.type)" size="small">
    <slot></slot>
  </component>
</template>

<script setup>
// 使用 import.meta.glob 自动引入 form-items 文件夹内的所有 Vue 文件
const formItemModules = import.meta.glob('./component-items/*.vue', {
  eager: true,
})
const componentMap = {}
for (const pathKey in formItemModules) {
  const module = formItemModules[pathKey]
  const regex = /\/(\w+)-item\.vue/
  const moduleKeyRegex = String(pathKey).match(regex)
  if (moduleKeyRegex && moduleKeyRegex[1]) {
    componentMap[moduleKeyRegex[1].toLowerCase()] = module.default
  }
}

const getComponentType = (fieldType) => {
  return componentMap[fieldType] ?? componentMap['input']
}
</script>
