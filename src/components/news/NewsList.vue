<template>
  <div>
    <h1>新闻页面</h1>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item of newlist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" src="http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'><span>发表时间：{{item.add_time}}</span><span>点击：{{item.click}}次</span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "NewsList",
        data(){
            return{
                newlist:[],
            }
        },
        created(){
            this.getNewList();
        },
        methods:{
            getNewList(){
                this.axios.get('/static/news.json').then(
                    (r)=>{this.newlist=r.data.news}
                ).catch(
                    (r)=>{console.log(r)}
                )
            }

        },
    }
</script>

<style scoped lang="scss">
.mui-table-view{
  li{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;

    }
  }
}
</style>
