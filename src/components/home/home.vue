<template>
  <div class="home clearfix">
    <sidebar style="float: left;"></sidebar>
    <div class="content">首页
      <el-row>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </el-row>
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
      radio: '1'
    }
  }
}
</script>

<style lang="scss">
  @import './home.scss';
</style>
