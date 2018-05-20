<template>
  <div class="detail">
    <sidebar style="float: left;"></sidebar>
    <div class="content">详情页
      <el-row>
        <el-date-picker
          v-model="value"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
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
      value: ''
    }
  }
}
</script>

<style lang="scss">
  @import './detail.scss';
</style>
