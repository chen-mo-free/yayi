<template>
  <div class="app-container">
    <el-form :rules="form" ref="form" :model="form" label-width="120px">
      <el-form-item label="商品编号" prop="goods_code">
        <el-input v-model="form.goods_code" />
      </el-form-item>
      <el-form-item label="商品名称" prop="goods_name">
        <el-input v-model="form.goods_name" />
      </el-form-item>
      <el-form-item label="所属分类" prop="class_id">
        <el-select v-model="form.class_id" placeholder="请选择所属分类">
          <el-option label="洗牙" value="1" />
          <el-option label="美白" value="2" />
          <el-option label="贴面" value="3" />
          <el-option label="矫正" value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="/uploadImage"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :file-list="fileList"
          :auto-upload="true"
          :before-upload="beforeUpload"
          :on-change="fileChange"
        >
          <!-- :action="baseURL + '/upload'"   action="/uploadImage" -->
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
          <!-- <el-button
            style="margin-left: 10px"
            size="small"
            type="success"
            @click="submitUpload"
            >上传到服务器</el-button
          > -->
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="原价" prop="original_price">
        <el-input v-model="form.original_price" />
      </el-form-item>
      <el-form-item label="商品简介" prop="introduction">
        <el-input v-model="form.introduction" />
      </el-form-item>
      <el-form-item label="商品详情" prop="goods_details">
        <el-input v-model="form.goods_details" type="textarea" />
      </el-form-item>
      <el-form-item label="所属医生" prop="doctor_id">
        <el-select
          v-model="form.doctor_id"
          value-key="doctor_id"
          placeholder="请选择所属医生"
        >
          <!-- <el-option value="" label="请选择" /> -->
          <el-option
            v-for="item in doctorList"
            :key="item.doctorList"
            :label="item.doctor_name"
            :value="item.doctor_id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="所属地址" prop="territory">
        <el-input v-model="form.territory" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button @click="onCancel">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addGoods, uploadImage, getDoctorInfo } from "@/api/goods";
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      form: {
        goods_code: "",
        goods_name: "",
        class_id: "洗牙",
        goods_img: "",
        original_price: "",
        introduction: "",
        goods_details: "",
        doctor_id: "",
        territory: "",
      },
      file: "",
      fileList: [],
      doctorList: [],
      pid:''
    };
  },
  methods: {
    fileChange(file, fileList) {
      this.file = file.raw;
    },
    handleSuccess(response, file, fileList) {
      this.submitUpload();
      //this.$refs.upload.submit();
    },
    beforeUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("只能上传 jpg/png 文件!");
      }
      if (!isLt5M) {
        this.$message.error("上传分类图片大小不能超过 5MB!");
      }
      return isJPG && isLt5M;
    },
    submitUpload() {
      //扩展名
      let extension = this.file.name.substr(
        this.file.name.lastIndexOf(".") + 1
      );
      //文件名
      let remoteFilename =
        "" + Date.now() + Math.floor(Math.random() * 999999) + "." + extension;
      this.form.goods_img = remoteFilename;

      //将图片转化为二进制流，异步方法
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = function () {
        //二进制流
        var base64Str = this.result;
        var startNum = base64Str.indexOf("base64,");
        startNum = startNum * 1 + 7;
        //去除前部格式信息
        var baseStr = base64Str.slice(startNum);
        //文件类型
        let fileType = base64Str.substr(0, startNum);

        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        let fd = new FormData();
        fd.append("file", base64Str);
        fd.append("fileType", fileType);
        fd.append("remoteFilename", remoteFilename);
        axios
          .post("/uploadImage", fd, config)
          .then((res) => {
            if (res.data.code == 20000) {
              this.$message({
                message: "上传成功!",
                type: "success",
              });
            } else {
              this.$message.error("上传失败!");
            }
          })
          .catch((res) => {});
      };
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSubmit() {
      // if(this.pid==undefined){
      addGoods(qs.stringify(this.form))
        .then((response) => {
          if (response.code == 20000) {
            this.$message({
              message: "添加成功!",
              type: "success",
            });
            this.$refs.upload.clearFiles();
            this.$refs.form.resetFields();
            this.$router.push('/goods/goodList');
            
          } else {
            this.$message.error("添加失败!");
          }
        })
        .catch((error) => {});
      // }
    },
    onCancel() {
      this.$refs.upload.clearFiles();
      this.$refs.form.resetFields();
    },
    getDoctorInfo() {
      getDoctorInfo()
        .then((res) => {
          if (res.code == 20000) {
            this.doctorList = res.results;
          }
        })
        .catch((error) => {});
    },
  },
  mounted() {
    this.getDoctorInfo();
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

