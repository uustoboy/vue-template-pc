<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>
<style lang="scss">
@include min-base();

#app{
}
</style>
