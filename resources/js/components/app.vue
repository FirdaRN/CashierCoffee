<template>
  <AppHeader />
  <router-view></router-view>
  <div class="modal fade my-modal" tabindex="-1" role="dialog">
      <component :is="modalComponent" :data="modalData"></component>
  </div>
  <modal-component :modal-components.sync="modalComponents"></modal-component>
</template>
<script>
import AppHeader from './AppHeader.vue'
import BootstrapModal from './Global/Mixins/BootstrapModal.vue';
export default {
  name: 'App',
  mixins: [BootstrapModal],
  components: {
    AppHeader: AppHeader
  },
  mounted () {
    console.log('mounted')
  }
};


</script>
<style scoped>
h1 {
  color: #42b983;
  text-align: center;
}
</style>