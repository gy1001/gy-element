<template>
  <el-form
    ref="dynamicForm"
    label-width="auto"
    class="ul-form-container"
    :model="formValue"
  >
    <template v-for="(item, index) in formItems" :key="index">
      <template v-if="item.groupName">
        <div class="form-title">{{ item.groupName }}</div>
        <el-form-item
          v-for="groupItem in item.children"
          :key="groupItem.label"
          :prop="groupItem.field"
          :style="{ flex: divideFlexItem(groupItem.span) }"
          v-bind="groupItem"
        >
          <template #label>
            <!-- formItem 支持label 插槽自定义 -->
            <slot :name="`${kebabCase(groupItem.field)}-label`"></slot>
          </template>
          <ComponentItem
            v-model="formValue[groupItem.field]"
            v-bind="groupItem.componentProps"
            :title="formValue[groupItem.field]"
          >
            <!-- 支持具名插槽的自定义渲染-->
            <slot
              :name="`${kebabCase(groupItem.field)}-default`"
              :formItem="groupItem"
              :formValue="formValue"
            ></slot>
          </ComponentItem>
        </el-form-item>
      </template>
      <template v-else>
        <el-form-item
          :style="{ flex: divideFlexItem(item.span) }"
          :prop="item.field"
          v-bind="item"
        >
          <template #label>
            <!-- formItem 支持label 插槽自定义 -->
            <slot :name="`${kebabCase(item.field)}-label`"></slot>
          </template>
          <ComponentItem
            v-model="formValue[item.field]"
            v-bind="item.componentProps"
            :title="formValue[item.field]"
          >
            <!-- 支持具名插槽的自定义渲染-->
            <slot
              :name="`${kebabCase(item.field)}-default`"
              :formItem="item"
              :formValue="formValue"
            ></slot>
          </ComponentItem>
        </el-form-item>
      </template>
    </template>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { isNil, kebabCase } from 'lodash-es'
import { ElFormItem, ElForm } from 'element-plus'
import ComponentItem from './component-item.vue'

const props = defineProps({
  /**
   * 表单平铺列数：默认是5列
   */
  columns: {
    type: Number,
    default: 5,
  },
  /**
   * 表单排列方向：默认水平
   */
  vertical: {
    type: Boolean,
    default: false,
  },
  /**
   * 表单之间的间距
   */
  gutter: {
    type: Number,
    default: 20,
  },
  /**
   * formItems: form表单要渲染的项集合
   */
  formItems: {
    type: Array,
    required: true,
  },
})

const dynamicForm = ref(null)
// 使用 defineModel 定义form表单的响应式值，父组件可以直接使用 v-model
const formValue = defineModel({
  type: Object,
  default: {},
})

defineExpose({
  dynamicForm,
  formValue,
})

const divideFlexItem = (itemSpan = 1) => {
  if (isNil(props.columns) || props.columns <= 0) return null
  // 每一份的间距计算：比如间距是20且分为5份，就有4个间隔，那么每一份就是 20 * (5-1) * 5
  const gapTweat = Math.floor(
    (props.gutter * (props.columns - 1)) / props.columns,
  )
  // 每一列的宽度 * 列数
  const calcWidth = `${Math.floor(100 / props.columns) * itemSpan}% - ${gapTweat * itemSpan}px`
  // 多列中间的间隙宽度
  const gutterWidth = props.gutter * (itemSpan - 1) + 'px'
  return `0 0 calc(${calcWidth} + ${gutterWidth})`
}
</script>

<style scoped>
.ul-form-container {
  width: 100%;
}

.form-title {
  width: 100%;
  padding-left: 4px;
  border-left: 4px solid var(--el-color-primary);
  margin: 20px 0 8px;
  color: var(--el-color-primary);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
}
</style>
