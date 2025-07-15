# gy-element

> 基于 Element-plus 的二次开发组件库

## el-form

使用如下配置项即可渲染表单

目前支持的类型

- input
- select

```javascript
const formItems = [
  {
    label: "交易账户",
    prop: "tradingAccount",
    span: 1, // 占1格
    componentProps: {
      // type: 'custom', // 支持使用type: custom 可以自定义渲染
      disabled: true,
      readonly: true,
    },
  },
];
```

对应的父组件使用方法

```vue

<template>
  <gy-form
      v-model="editDataForm"
      :formItems="formItems"
      label-position="top"
      class="account-basic-info-form"
      style="width: 100%"
  >
    <!--   支持使用插槽自定义渲染    -->
    <!--   <template #tradingAccount_default="{ formValue, formItem }">-->
    <!--      formValue: {{ formValue }} formItem: {{ formItem }}-->
    <!--      tradingAccount_default_slots-->
    <!--    </template>-->
  </gy-form>
</template>
```
