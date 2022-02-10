<template>
  <div class="app">
    <v-header />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
  import vHeader from '@/components/Header.vue'
  import vFooter from '@/components/Footer.vue'

export default {
  components: {
    vHeader,
    vFooter,
  }  
}

</script>

<style lang="scss">
* {
  margin: 0;
}
#app {
  width: 100%;
  height: auto;
  font-family: 'PT Sans', Open Sans;
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=PT+Sans:wght@400;700&display=swap');
}

</style>
