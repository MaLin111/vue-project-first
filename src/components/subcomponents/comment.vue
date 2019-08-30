<template>
    <div class="cmt">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入要bb的内容(最多120字)" maxlength="120"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="cmt-list">
        <div class="cmt-item">
          <div class="cmt-title">
            第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12
          </div>
          <div class="cmt-body">
            啊啊啊啊啊啊啊啊啊啊啊啊啊
          </div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12
          </div>
          <div class="cmt-body">
            啊啊啊啊啊啊啊啊啊啊啊啊啊
          </div>
        </div>
      </div>
      <mt-button type="primary" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return{

            }
        },
        methods:{
            getcmt(){

            }
        }
    }
</script>

<style scoped lang="scss">
.cmt{
  h3{
    font-size: 16px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list{
    margin-top: 5px;
    .cmt-item{
      font-size: 13px;
      .cmt-title{
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body{
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
