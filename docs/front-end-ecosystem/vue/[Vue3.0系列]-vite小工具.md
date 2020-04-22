# Vue3.0 beta版 vite小工具

> 一个实验性的不需要构建的 vue 开发服务器（支持热更新，不需要编译）。

> template -> serve -> html

## 1. 安装
```js
// 新建文件夹
mkdir vue-vite
cd vue-vite

// 初始化项目
npm init -y

// 全局安装 vite
npm install -g vite

// 安装vue3.0 beta版
npm install vue@next
```
## 2. 新建文件
```js
// 新建文件
type nul > index.html

/* index.html(vue-vite/index.html) */
<div id="app"></div>
<script type="module">
	import { createApp } from 'vue';
	import Component from './Component.vue';

	createApp(Component).mount('#app');
</script>

/* Component.vue(vue-vite/Component.vue) */
<template>
  <button @click="count++">{{ count }}</button>
</template>

<script>
export default {
  data: () => ({ count: 0 })
}
</script>

<style scoped>
button { color: red }
</style>
```

## 3. 启动
```js
// vue-vite/
npx vite
// localhost:3000
```
## 4. 总结

个人感觉对现阶段来测试 vue3.0 新增的 Composition API 来说很是方便。大概瞧了下源码，有 `koa`, `websocket`。

期待发现更多的未知，加油！