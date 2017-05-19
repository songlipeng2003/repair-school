<template>
  <transition name="fade-right">
    <router-view></router-view>
  </transition>
</template>

<script>
import 'assets/styles/iconfont.css'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
