<template>
    <div>
        <div class="div_1">
            <img src="http://127.0.0.1:3000/img/_bo/home_img/weixin-suc.png" class="img_">
            <p class="p">支付成功</p>
        </div>
        <div class="qian">
            <p>神洲行医院</p>
            <div>
                <span>¥</span>
                <span>{{this.data[0]}}</span>
            </div>
        </div>
        <div class="wan" @click="wer">完成</div>
    </div>
</template>
<style scoped>
.img_{
    width:20%;
}
.p{color:#42b035;}
   
.wan{
    border: 1px solid #42b035 ;
    width: 40%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    color:#42b035;
    margin-left: 121px;
    margin-top: 325px;
}
.div_1{
    margin-top: 50px;
    text-align: center;
}
.div_1>p{
    margin-top: 10px;
}

.div_1>img{
    width: 35px;
}
.qian{
    text-align: center;
}
.qian>:first-child{
    margin-top:70px;
}
.qian>div{
    text-align: center;
    margin-top: 15px;
}
.qian>div>:first-child{
    font-weight: 600;
    font-size: 20px;
}
.qian>div>:nth-child(2){
    font-size: 40px;
    font-weight: 600;
}
</style>
<script>
export default {
    data(){
         return{
             data:[]
         }
    },
    mounted(){
        let i=decodeURIComponent(location.search).slice(1);
        i=i.split("&");
        for(let e=0;e<i.length;e++){
            this.data.push(i[e].split("=")[1]);
        }
    
    },
    methods:{
           wer(){
      this.$router.push("/")
    }
    }
}

</script>