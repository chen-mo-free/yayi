<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="商品编号">
        <el-input v-model="form.goods_code" />
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="form.goods_name" />
      </el-form-item>
      <el-form-item label="所属分类">
        <el-select v-model="form.class_id" placeholder="请选择所属分类">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
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
          <!-- :action="baseURL + '/upload'" -->
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
          <el-button
            style="margin-left: 10px"
            size="small"
            type="success"
            @click="submitUpload"
            >上传到服务器</el-button
          >
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="原价">
        <el-input v-model="form.original_price" />
      </el-form-item>
      <el-form-item label="商品简介">
        <el-input v-model="form.introduction" />
      </el-form-item>
      <el-form-item label="商品详情">
        <el-input v-model="form.goods_details" type="textarea" />
      </el-form-item>
      <el-form-item label="所属医生">
        <el-select v-model="form.doctor_id" placeholder="请选择所属医生">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="所属地址">
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
import { addGoods, uploadImage } from "@/api/goods";
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      form: {
        goods_code: "",
        goods_name: "",
        class_id: 0,
        goods_img: "",
        original_price: 0,
        introduction: "",
        goods_details: "",
        doctor_id: "",
        territory: "",
      },
      file: "",
      fileList: [],
    };
  },
  methods: {
    fileChange(file, fileList) {
      this.file = file.raw;
    },
    handleSuccess(response, file, fileList) {
      //this.$refs.upload.uploadFiles
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
        fd.append("extension", extension);
        axios
          .post("/uploadImage", fd, config)
          .then((res) => {
            debugger;
            // if (res.success) {
            //   this.$notify.success({ title: "系统提示", message: res.message });
            // }
          })
          .catch((res) => {});

        // uploadImage({ file: baseStr })
        //   .then((response) => {
        //     debugger;
        //     console.log(response);
        //   })
        //   .catch((error) => {});
      };

      //this.$refs.upload.uploadFiles
      //this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      debugger;
      console.log(file, fileList);
    },
    handlePreview(file) {
      debugger;
      console.log(file);
    },
    onSubmit() {
      addGoods(qs.stringify(this.form))
        .then((response) => {
          console.log(response);
          this.$message("submit!");
        })
        .catch((error) => {
          // reject(error)
        });
      
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
  },
  mounted() {
    console.log(this.baseURL);
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

