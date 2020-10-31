<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" >
        <template slot-scope="scope">
          {{ scope.row.goods_id }}
        </template>
      </el-table-column>
      <el-table-column label="商品名称" >
        <template slot-scope="scope">
          {{ scope.row.goods_name }}
        </template>
      </el-table-column>
      <!-- <el-table-column label="医生简介" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.doctor_introductio }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="原价"  align="center">
        <template slot-scope="scope">
          {{ scope.row.original_price }}
        </template>
      </el-table-column>
      <el-table-column label="预付金"  align="center">
        <template slot-scope="scope">
          {{ scope.row.prepay }}
        </template>
      </el-table-column>
      <el-table-column label="商品简介"  align="center">
        <template slot-scope="scope">
          {{ scope.row.introduction }}
        </template>
      </el-table-column>
      <el-table-column label="已售数量"  align="center">
        <template slot-scope="scope">
          {{ scope.row.sold }}
        </template>
      </el-table-column>
      <el-table-column label="所属分类"  align="center">
        <template slot-scope="scope">
          {{ scope.row.class_id }}
        </template>
      </el-table-column>
      <el-table-column label="所属医生"  align="center">
        <template slot-scope="scope">
          {{ scope.row.doctor_name }}
        </template>
      </el-table-column>
      <el-table-column label="所属地址"  align="center">
        <template slot-scope="scope">
          {{ scope.row.territory }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="操作"  align="center">
        <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
        </el-table-column>
      <el-table-column class-name="status-col" label="操作"  align="center">
        <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { goodsList,deleteGoods } from '@/api/goodsList'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      goodsList().then(response => {
        console.log(response.results);
        this.list = response.results
        // console.log(response.data.results);
        this.listLoading = false
        console.log(this.list)
      })
    },
    handleEdit(index, row) {
        console.log(index, row);
        this.$router.push('/goods/addGoods?pid='+row.goods_id);
      },
    handleDelete(index, row) {
      // console.log(index, row);
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let 
          pid=row.goods_id;
          deleteGoods(pid).then(response=>{
          this.$router.go(0);
           })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
      }
  }
}
</script>
