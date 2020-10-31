const express=require("express");
const server=express();
const cors=require("cors");
const mysql=require("mysql");
const bodyParser=require("body-parser");
const md5=require("md5");
const qs=require("qs");
//multer中间件引用
const multer = require('multer')
//新浪sdk引用
const sinaCloud = require('scs-sdk')
//这里还需要调用一个路径解析模块
const pathLib = require("path"); 

const pool=mysql.createPool({
  host:"111.229.180.90",
  port:"3306",
  user:"guzhen",
  password:"t55EJpzHc3R3Pej4",
  database:"guzhen",
  connectionLimit:10
});
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080","http://111.229.180.90:888"]
}));

server.use(bodyParser.json());  // form表单解析必须
server.use(bodyParser.urlencoded({
  extended:false
}))
server.use(express.static('./public'))


//注册
server.post("/register",(req,res)=>{
  let username=req.body.username;
  let password=req.body.password;
  let sql="SELECT id FROM user WHERE username=?";
  pool.query(sql,[username],(error,results)=>{
    if(error) throw error;
    if(results.length==0){
      sql="INSERT user(username,password) VALUES(?,MD5(?))";
      pool.query(sql,[username,password],(error,results)=>{
        if(error) throw error;
        res.send({message:"注册成功",code:1});
      })
    }else{
      res.send({message:"用户名已存在",code:0});
    }
  })
})


//登录
server.post("/login",(req,res)=>{
  let username=req.body.username;
  let password=md5(req.body.password);
  let sql="SELECT id,username,uname FROM user WHERE username=? AND password=?";
  pool.query(sql,[username,password],(error,results)=>{
    if(error) throw error;
    if(results.length==1){
      res.send({message:"登录成功",code:1,info:results[0]});
    }else{
      res.send({message:"登录失败",code:0});
    }
  });
});

//获取购物车数据
server.get('/shopping_car',(req,res)=>{
  //console.log(res);
  let username=req.query.username
  // console.log(username)
   //console.log(req.query)
   //console.log(req.body)
  // console.log(req)
  let sql='SELECT * FROM shopping_car WHERE username=?';
  pool.query(sql,[username],(error,results)=>{
    if(error) throw error;
    if(results.length>=1){
      res.send({message:'获取成功',code:1,info:results});
    }else{
     
      res.send({message:'获取失败',code:0})
    }
  })
})

///////////////////////////
//删除商品信息
server.delete('/deleteGoods',(req,res)=>{
  let pid=req.query.pid;
  let sql='delete from goods where goods_id='+pid;
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({message:'ok',code:20000})
  })
})

///////////////////////////
//添加商品信息
server.get('/addGoods',(req,res)=>{
  let obj= qs.parse(req.query.data);
  console.log(obj);
  let sql='INSERT INTO goods SET ?';
  pool.query(sql,[obj],(error,results)=>{
    if(error) throw error;
    console.log(results);
    if(results.affectedRows==1){
      res.send({message:'添加成功',code:20000});
    }else{
      res.send({message:'添加失败',code:99999})
    }
  })
});

////////////////////////////////
//添加医生信息
server.get('/addDoctors',(req,res)=>{
  let obj=qs.parse(req.query.data);
  let sql='insert into doctor set ?';
  pool.query(sql,[obj],(error,results)=>{
    if(error) throw error;
    if(results.affectedRows==1){
      res.send({message:'添加成功',code:20000});
    }else{
      res.send({message:'添加失败',code:99999})
    }
  })

})
///////////////////////////////
//查询医生信息
server.get('/doctorList',(req,res)=>{
  let sql="select doctor_id,doctor_name,doctor_introductio,service_times,case level when '1' then'医生' when '2' then '副主任医师' when '3' then '主任医师' end 'level',case sex when '1' then '男' when '2' then '女' when '0' then '保密' end 'sex',experience,territory,case is_attestation when '1' then '是' when '0' then '否' end 'is_attestation',doc_office from doctor";
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    // console.log(results);
    res.send({message:'ok',code:20000,results:results})
    // console.log(results);
  })
})


////////////////////////////
//查询商品信息
server.get('/goodsList',(req,res)=>{
  let sql="select goods_id,goods_name,goods_img,original_price,prepay,introduction,goods_details,sold,goods_code,goods.doctor_id,doctor_name,goods.territory,class_id,case class_id when '1' then '洗牙' when '2' then '美白' when '3' then '贴面' when '4' then '矫正' end 'class_id' from goods left join doctor on goods.doctor_id = doctor.doctor_id";
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({message:'ok',code:20000,results:results})
  })
})
/////////////////////////
//修改医生信息接口
server.get('/changeDoctor',(req,res)=>{
  let did=req.query.did;
  // console.log(did)
  let sql='select * from doctor where doctor_id=?';
  pool.query(sql,[did],(error,results)=>{
    if(error) throw error;
    res.send({message:'ok',code:20000,results:results})
  })
})
/////////////////////////
//更新医生信息
server.put('/updateDoctor',(req,res)=>{
  let obj= qs.parse(req.query.form);
  console.log(obj)
  let sql="update doctor set doctor_name=?,doctor_introductio=?,address=?,level=?,sex=?,experience=?,territory=?,is_attestation=?,certificate_url=?,doc_office=?,is_recommend=? where doctor_id=?";
  pool.query(sql,[obj.doctor_name,obj.doctor_introductio,obj.address,obj.level,obj.sex,obj.experience,obj.territory,obj.is_attestation,obj.certificate_url,obj.doc_office,obj.is_recommend,obj.doctor_id],(error,results)=>{
    if(error) throw error;
    res.send({message:'ok',code:20000})
  })
})
///////////////////////////
//删除医生信息
server.delete('/deleteDoctor',(req,res)=>{
  let did=req.query.did;
  let sql='delete from doctor where doctor_id='+did;
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    res.send({message:'ok',code:20000})
  })
})
  //res.json({result: 'success', data: req.body});


//上传图片到新浪云服务器 uploads.single('file'), 
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
// server.post('/uploadImage', multipartMiddleware, function(req, res) {
//   res.header('Access-Control-Allow-Origin', '*');
//   let fileType=req.body.fileType;
//   let fileBuffer=req.body.file;
//   //let fileBuffer=fileType+req.body.file;
//   let extension=req.body.extension;
//   let remoteFilename = ''+Date.now()+Math.random()*999999 +'.'+extension;


//    console.log(remoteFilename)

//    var SinaCloud = require('scs-sdk');
//    SinaCloud.config.loadFromPath('./config.json');
   
//    var myBucket = new SinaCloud.S3({params: {Bucket: 'shenzhouxing'}});
//    myBucket.createBucket(function() {

//      var data = {Key: remoteFilename, Body: fileBuffer};
//      myBucket.putObject(data, function(err, data) {
//        console.log(data)
//        if (err) {
//          console.log("Error uploading data: ", err);
//        } else {
//          console.log("Successfully uploaded data to myBucket/myKey");
//        }
//      });
//    });




	// //uploads.single  是一次只传一张图片
	// var pathNew = req.file.path + pathLib.parse(req.file.originalname).ext;
	// //这是新的文件名
  //   console.log(pathNew);
  //   fs.rename(req.file.path, pathNew, function (err) {
  //       if (err) {
  //           res.send("上传失败");
  //       } else {
  //           let fileName = pathNew;
  //           let remoteFilename = req.file.originalname;
  //           var fileBuffer = require('fs').readFileSync(fileName);
  //           //上传文件
	//         s3.putObject({
	//             ACL: 'public-read',
	//             Bucket: 'shenzhouxing', //上传至yang47文件夹里的imgs文件夹里
	//             Key: remoteFilename,
	//             Body: fileBuffer
	//         }, function(error, response) {
	//             if (error) {
	//                 console.log(error);
	//             } else {
	//             	//上传图片成功，将图片地址返回给前端
	//             	let path = "http://sinacloud.net/shenzhouxing/1603959947858685316.6206470985.png"+remoteFilename;
	//             	resData.data = path
 	// 				res.json(resData)
	//                 console.log('uploaded file[' + fileName + '] to [' + remoteFilename + ']');
	//             }
	//         });
  //       }
  //   });
// })
//////////////////////////


///////////////////////////
//添加商品信息
server.post('/addGoods',(req,res)=>{
  let obj= qs.parse(req.query.data);
  let sql='INSERT INTO goods(goods_name,goods_img,original_price,introduction,goods_details,class_id,goods_code,doctor_id,territory) values(?,?,?,?,?,?,?,?,?);';
  pool.query(sql,[obj.goods_name,obj.goods_img,obj.original_price,obj.introduction,obj.goods_details,obj.class_id,obj.goods_code,obj.doctor_id,obj.territory],(error,results)=>{
    if(error) throw error;
    console.log(results);
    if(results.affectedRows==1){
      res.send({message:'添加成功',code:20000});
    }else{
      res.send({message:'添加失败',code:99999});
    }
  })
});


//上传图片到新浪云服务器 uploads.single('file'), 
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
server.post('/uploadImage', multipartMiddleware, function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  let fileType=req.body.fileType;
  let fileBuffer=req.body.file;;
  let remoteFilename=req.body.remoteFilename;
 
   console.log(remoteFilename)

   var SinaCloud = require('scs-sdk');
   SinaCloud.config.loadFromPath('./config.json');
   
   var myBucket = new SinaCloud.S3({params: {Bucket: 'shenzhouxing'}});
   myBucket.createBucket(function() {

     var data = {Key: remoteFilename, Body: fileBuffer};
     myBucket.putObject(data, function(err, data) {
       if (err) {
         res.send({message:'上传失败',code:99999});
       } else {
         res.send({message:'上传成功',code:20000});
       }
     });
   });
});

//获取医生信息
server.get('/getDoctorInfo',(req,res)=>{
  let sql='SELECT doctor_id,doctor_name,doc_office FROM doctor order by doc_office,doctor_name;';
  pool.query(sql,(error,results)=>{
    if(error) throw error;
    console.log(results);
    if(results.length>0){
      res.send({code:20000,results:results});
    }else{
      res.send({code:-1});
    }
  })
});

//后台登录验证
server.post('/getAdminLogin',(req,res)=>{
  let obj=qs.parse(req.query.data);
  let username=obj.username
  let password=obj.password
  console.log(username,password);
  let sql='select username from user where username=? and password=md5(?) and id=-99;';
  pool.query(sql,[username,password],(error,results)=>{
    if(error) throw error;
    console.log(results);
    if(results.length>0){
      res.send({code:20000,results:results});
    }else{
      res.send({code:99999});
    }
  })
})

//////////////////////////

server.listen(3000,()=>{
  console.log("server is running")
});