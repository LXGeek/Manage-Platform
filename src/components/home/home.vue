<template>
  <div class="home clearfix">
    <sidebar style="float: left;"></sidebar>
    <div class="content">首页</div>
  </div>
</template>

<script>
import Sidebar from '../sidebar/sidebar.vue'

export default {
  components: {
    'sidebar': Sidebar,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import './home.scss';
</style>
