<template>
  <div class="table">
    <div class="tools">
      <span>筛选：</span>
      <el-select v-model="selectProvince" placeholder="请选择省份" @change="searchProvince">
        <el-option
          v-for="province in provinces"
          :key="province.id"
          :label="province.name"
          :value="province.name"
        ></el-option>
      </el-select>
    </div>
    <el-table border stripe :data="tableData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="出生日期">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="居住地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名" prop="name"></el-table-column>
      <el-table-column sortable align="center" label="出生日期" prop="date"></el-table-column>
      <el-table-column align="center" label="居住地址" prop="address"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="page.total"
      :current-page="page.curPage"
      :page-size="page.pageSize"
      :page-sizes="page.pageSizes"
      @current-change="handCurrentChange"
      @size-change="handSizeChange"
      layout="total, -> , sizes, prev, pager, next"
    ></el-pagination>

    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm">
        <el-form-item label="姓名：" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="出生日期：" :label-width="formLabelWidth">
          <el-date-picker
            v-model="dialogForm.date"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="居住地址：" :label-width="formLabelWidth">
          <el-input v-model="dialogForm.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="deleteVisible" width="30%">
      <div class="delete-tooltip">确定要删除吗？</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="deleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      page: {
        curPage: 1,
        total: 0,
        pageSize: 5,
        pageSizes: [5, 10, 15, 20]
      },
      formLabelWidth: "150px",
      dialogFormVisible: false,
      deleteVisible: false,
      dialogForm: {
        name: "",
        date: "",
        address: ""
      },
      selectProvince: "",
      idx: -1,
      provinces: [
        { id: 1, name: "江西省" },
        { id: 2, name: "广东省" },
        { id: 3, name: "四川省" },
        { id: 4, name: "吉林省" },
        { id: 5, name: "海外" },
        { id: 6, name: "黑龙江省" }
      ]
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      let self = this;
      this.$axios
        .get("../static/table.json")
        .then(function(res) {
          if (res.status == 200) {
            let list = res.data.list;
            self.tableData = res.data.list;
            self.page.total=Number(res.data.total);
            localStorage.setItem("list", JSON.stringify(list));
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      this.idx = index;
      this.dialogForm = {
        name: row.name,
        date: row.date,
        address: row.address
      };
      this.dialogFormVisible = true;
    },
    saveEdit() {
      this.$set(this.tableData, this.idx, this.dialogForm);
      this.dialogFormVisible = false;
      this.$message({
        type: "success",
        message: "修改第" + this.idx + 1 + "行数据成功"
      });
    },
    handleDelete(index, row) {
      this.idx = index;
      this.deleteVisible = true;
    },
    deleteConfirm() {
      this.tableData.splice(this.idx, 1);
      this.$message({
        type: "success",
        message: "删除成功"
      });
      this.deleteVisible = false;
    },
    searchProvince() {
      let data = JSON.parse(localStorage.getItem("list"));
      let selectProvince = this.selectProvince;
      let result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].address.split(" ")[0] == selectProvince) {
          result.push(data[i]);
        }
      }
      this.tableData = result;
    },
    handSizeChange(val){
      this.page.pageSize=val;
    },
    handCurrentChange(val){
      this.page.curPage=val;
    },
  }
};
</script>

<style scoped>
.table {
  background: #fff;
}
.tools {
  padding: 10px;
}
.el-input {
  width: 80%;
}

.delete-tooltip {
  font-size: 18px;
  text-align: center;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 33%;
  color: #2365cc !important;
}
.demo-table-expand .el-form-item__content {
  width: 90px;
  /* color: black !important; */
}
</style>
