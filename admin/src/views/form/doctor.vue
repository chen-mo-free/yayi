<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="医生ID" hidden>
        <el-input id="docId" disabled v-model="form.doctor_id"/>
      </el-form-item>
      <el-form-item label="医生姓名">
        <el-input v-model="form.doctor_name"/>
      </el-form-item>
      <el-form-item label="医生简介">
        <el-input v-model="form.doctor_introductio" type="textarea"/>
      </el-form-item>
      <el-form-item label="服务次数" hidden>
        <el-input v-model="form.service_times" disabled/>
      </el-form-item>
      <el-form-item label="粉丝数" hidden>
        <el-input v-model="form.fans_num" disabled/>
      </el-form-item>
      <el-form-item label="日记数" hidden >
        <el-input v-model="form.journal_num" disabled/>
      </el-form-item>
      <el-form-item label="出诊地址">
        <el-input v-model="form.address"/>
      </el-form-item>
      <el-form-item label="职称">
        <el-radio-group v-model="form.level">
          <el-radio label="1">医生</el-radio>
          <el-radio label="2">副主任医师</el-radio>
          <el-radio label="3">主任医师</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex" prop="sex">
          <el-radio label="1">男</el-radio>
          <el-radio label="2">女</el-radio>
          <el-radio label="0">保密</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="从业经验">
        <el-input v-model="form.experience" type="textarea"/>
      </el-form-item>
      <el-form-item label="所属地">
        <el-input v-model="form.territory"/>
      </el-form-item>
      <el-form-item label="是否认证">
        <el-radio-group v-model="form.is_attestation">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="医师资格证">
        <el-input v-model="form.certificate_url" type="textarea"/>
      </el-form-item>
      <el-form-item label="科室">
        <el-input v-model="form.doc_office"/>
      </el-form-item>
      <el-form-item label="是否推荐">
        <el-radio-group v-model="form.is_recommend">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addDoctors, changeDoctor,updateDoctor } from "@/api/doctor.js";
import qs from "qs";
export default {
  data() {
    return {
      form: {
        doctor_id: "",
        doctor_name: "",
        doctor_introductio: "",
        service_times: "",
        fans_num: "",
        journal_num: "",
        address: "",
        level: "",
        sex: "",
        experience: "",
        territory: "",
        is_attestation: "",
        certificate_url: "",
        doc_office: "",
        is_recommend: ""
      },
      did: ""
    };
  },
  methods: {
    onSubmit() {
      // this.$message('submit!')
      if(this.did==undefined){
         addDoctors(qs.stringify(this.form))
        .then(response => {
          // console.log(response);
          this.$message("添加成功!");
          this.$router.push('/example/doctorlist');
        })
        .catch(error => {
          // reject(error)
        });
      }else{
         updateDoctor(qs.stringify(this.form)).then(response=>{
           this.$message("修改成功！");
           this.$router.push('/example/doctorlist');
         })
      }
     
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    }
  },
  mounted() {
    this.did = this.$route.query.did;
    if (this.did != undefined) {
      changeDoctor(this.did).then(response => {
        let doctorInfo = response.results[0];
        this.form.doctor_id = doctorInfo.doctor_id;
        this.form.doctor_name = doctorInfo.doctor_name;
        this.form.doctor_introductio = doctorInfo.doctor_introductio;
        this.form.service_times = doctorInfo.service_times;
        this.form.fans_num = doctorInfo.fans_num;
        this.form.journal_num = doctorInfo.journal_num;
        this.form.address = doctorInfo.address;
        this.form.level = doctorInfo.level.toString();
        this.form.sex = doctorInfo.sex.toString();
        this.form.experience = doctorInfo.experience;
        this.form.territory = doctorInfo.territory;
        this.form.is_attestation = doctorInfo.is_attestation.toString();
        this.form.certificate_url = doctorInfo.certificate_url;
        this.form.doc_office = doctorInfo.doc_office;
        this.form.is_recommend = doctorInfo.is_recommend.toString();
        // console.log(doctorInfo);
      });
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

