<template>
    <div>
<!--      轮播图-->
      <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item of imagelist" :key="imagelist.url">1

            </mt-swipe-item>
        </mt-swipe>
<!--      九宫格-->
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
            <img src="../../assets/images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <img src="../../assets/images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <img src="../../assets/images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <img src="../../assets/images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <img src="../../assets/images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
            <img src="../../assets/images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
      </div>


    </div>
</template>

<script>
    export default {
        name: "HomeContainer",
        data(){
            return{
                imagelist:[],
            }
        },
        created(){
          this.getLunBotu();
        },
        methods:{
          getLunBotu(){
              //模拟数据
              this.axios.get("/static/image.json").then(
                  t=>{this.imagelist=t.data.image}
              ).catch(
                  e=>{console.log(e)}
              )
          }
        },
    }
</script>

<style scoped lang="scss">
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: pink;
        }
        &:nth-child(3){
            background-color: blue;
        }
    }
}
.mui-content>.mui-table-view:first-child{
  margin: 0;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
  img {
    height: 60px;
    width: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }

}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>
