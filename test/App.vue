<template>
  <div>
    <gy-form :form-items="formItems"></gy-form>
    <gy-button></gy-button>
  </div>
</template>

<script setup lang="ts">
import { GyForm, GyButton } from '../packages/index'
// import {GyForm, GyButton} from "../dist/index";
import '../dist/index.css'

const formItems = [
  {
    groupName: 'test 组1',
    children: [
      { label: '测试1', prop: 'test1' },
      { label: '测试2', prop: 'test2' },
      { label: '测试3', prop: 'test3' },
      { label: '测试4', prop: 'test4' },
      { label: '测试5', prop: 'test5' },
      { label: '测试6', prop: 'test6' },
    ],
  },
  { label: '测试1', prop: 'test1' },
  { label: '测试2', prop: 'test2' },
  { label: '测试3', prop: 'test3' },
  { label: '测试4', prop: 'test4' },
  { label: '测试5', prop: 'test5' },
  { label: '测试6', prop: 'test6' },
]
</script>

<style scoped></style>
