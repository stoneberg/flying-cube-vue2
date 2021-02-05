<template>
  <div>
    <Header />
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
};
</script>
