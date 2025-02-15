<template>
  <AppHeader />
  <router-view></router-view>
</template>
<script>
import AppHeader from './AppHeader.vue'
export default {
  name: 'App',

  components: {
    AppHeader: AppHeader
  }  
};


</script>
<style scoped>
h1 {
  color: #42b983;
  text-align: center;
}
</style>