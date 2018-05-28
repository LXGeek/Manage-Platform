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
      <div class="main-top">
        <div class="main-top-left">
        <span style="color:#606266">客户列表</span>
        </div>
        <div class=main-top-right>
          <el-button type="primary" @click="dialogFormVisible = true">新建客户</el-button>
            <el-dialog title="客户详情" :visible.sync="dialogFormVisible">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="客户名称">
                <el-input v-model="form.client_name"></el-input>
              </el-form-item>
              <el-form-item label="客户法人">
                <el-input v-model="form.client_person"></el-input>
              </el-form-item>
              <el-form-item label="联系时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="支付方式">
                <el-radio-group v-model="form.resource">
                  <el-radio label="支付宝"></el-radio>
                  <el-radio label="支票"></el-radio>
                  <el-radio label="现金"></el-radio>
                  <el-radio label="银行卡"></el-radio>
                </el-radio-group>
              </el-form-item>
            <el-form-item label="客户简介">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        </div>
      </div>
      <div class="main-buttom">
        <div class="main-buttom-top">
          <el-table
              :data="tableData"
              style="width: 100%">
                <el-table-column
                  prop="client_name"
                  label="客户名称">
                </el-table-column>
                <el-table-column
                  prop="client_person"
                  label="客户所有人">
                </el-table-column>
                <el-table-column
                  prop="client_level"
                  label="客户级别">
                </el-table-column>
                <el-table-column
                  prop="client_address"
                  label="客户地址">
                </el-table-column>
                <el-table-column
                  prop="client_phone"
                  label="客户电话">
                </el-table-column>
                <el-table-column
                  prop="client_date"
                  label="创建日期">
                </el-table-column>
            </el-table>
        </div>
      </div>
      <div class="main-foot">
        <div class="block">
          <el-pagination
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
const url = "https://www.easy-mock.com/mock/5b0be6741725f034fca4cbe1/example/listclient"

import Sidebar from '../sidebar/sidebar.vue'

export default {
  components: {
    'sidebar': Sidebar,
  },
  data() {
    return {
      tableData: [
      ],
      input:'',
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
          client_name: '',
          client_person: '',
          date1: '',
          desc: '',
          resource: '',
        },
        formLabelWidth: '200px'
    };
  },
  created() {
    this.requireData();
  },

  methods :{
  requireData() {
    this.axios.get(url,null).then(resp=>{
      let respon = resp.data;
      if(respon.success){
        this.tableData = respon.data.tableList;
      } else {
        alert(respon.message);
      }
    })

  }
  }
};
</script>

<style lang="scss">
  @import './client.scss';
</style>
