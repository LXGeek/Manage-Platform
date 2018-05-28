<template>
<el-container>
  <sidebar style="float: left;"></sidebar>
  <el-container>
    <el-header>
      <div class="header-left">首页</div>
      <div class="header-right">
          <i class="el-icon-search" title="查找"></i>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <i class="el-icon-bell" title="消息"></i>
          <el-dropdown>
          <i class="el-icon-arrow-down el-icon--right"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>日程</el-dropdown-item>
              <el-dropdown-item>任务</el-dropdown-item>
              <el-dropdown-item>工作报告</el-dropdown-item>
              <el-dropdown-item>审批</el-dropdown-item>
              <el-dropdown-item>通讯录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <div class="main-left">
        <el-tabs v-model="activeName2"  @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">
          <el-button type="primary" size="10px" icon="el-icon-circle-plus-outline" circle></el-button>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="main-right">
        <div class="main-right-top">
        </div>
        <div class="main-right-bottom">
        </div>
      </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Sidebar from '../sidebar/sidebar.vue'

export default {
  components: {
    'sidebar': Sidebar,
  },
  data() {
    return {
      activeName2: 'first',
      input : ''
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss">
  @import './home.scss';
</style>
