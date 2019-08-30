<template>
    <div class="newsinfo">
      <h3 class="title">新闻标题--{{id}}</h3>
      <p class="subtitle">
        <span>发表时间：</span>
        <span>点击：次数</span>
      </p>
      <hr>
      <div class="content">
        aaaaaaaaaaaaa

      </div>
      <commet-box></commet-box>

    </div>
</template>

<script>
  import comment from "../subcomponents/comment";
    export default {
        name: "NewsInfo",
        data(){
            return{
                id:this.$route.params.id
            }
        },
        // created(){
        //   this.getnewinfo();
        // },
        methods:{
            getnewinfo(){

            }
        },
        components:{
          "commet-box":comment
        }

    }
</script>

<style scoped lang="scss">
.newsinfo{
  padding: 0 6px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content{

  }
}
</style>
