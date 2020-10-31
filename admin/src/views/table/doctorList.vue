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
      <!-- <el-table-column align="center" label="ID" width="40">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column> -->
      <el-table-column label="ID" width="80">
        <template slot-scope="scope">
          {{ scope.row.doctor_id }}
        </template>
      </el-table-column>
      <el-table-column label="医生姓名" >
        <template slot-scope="scope">
          {{ scope.row.doctor_name }}
        </template>
      </el-table-column>
      <!-- <el-table-column label="医生简介" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.doctor_introductio }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="服务次数"  align="center">
        <template slot-scope="scope">
          {{ scope.row.service_times }}
        </template>
      </el-table-column>
      <el-table-column label="职称"  align="center">
        <template slot-scope="scope">
          {{ scope.row.level }}
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center">
        <template slot-scope="scope">
          {{ scope.row.sex }}
        </template>
      </el-table-column>
      <el-table-column label="从业经验"   align="center">
        <template slot-scope="scope">
          {{ scope.row.experience }}
        </template>
      </el-table-column>
      <el-table-column label="所属地"  align="center">
        <template slot-scope="scope">
          {{ scope.row.territory }}
        </template>
      </el-table-column>
      <el-table-column label="是否认证"  align="center">
        <template slot-scope="scope">
          {{ scope.row.is_attestation }}
        </template>
      </el-table-column>
      <el-table-column label="科室"  align="center">
        <template slot-scope="scope">
          {{ scope.row.doc_office }}
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
import { doctorList,deleteDoctor } from '@/api/doctorList'

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
      doctorList().then(response => {
        // console.log(response.results);
        this.list = response.results
        // console.log(response.data.results);
        this.listLoading = false
        // console.log(this.list)
      })
    },
    handleEdit(index, row) {
        // console.log(index, row);
        this.$router.push('/example/doctor?did='+row.doctor_id);
      },
    handleDelete(index, row) {
      // console.log(index, row);
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let did=row.doctor_id;
          deleteDoctor(did).then(response=>{
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
