<template>
  <div class="detail">
    <sidebar style="float: left;"></sidebar>
    <div class="content">详情页</div>
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
  @import './detail.scss';
</style>
