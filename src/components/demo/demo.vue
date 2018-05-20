<template>
<div class="home clearfix">
  <sidebar style="float: left;"></sidebar>
  <div class="content">demo
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
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
      input: ''
    }
  }
}
</script>

<style lang="scss">
  @import './demo.scss';
</style>
