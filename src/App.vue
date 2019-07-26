<template>
  <div id="app">
    <!-- header -->
    <app-header :poiInfo="poiInfo"></app-header>
    <!-- navigation -->
    <app-nav :commentNum="commentNum"></app-nav>
    <!-- content -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from '@/components/nav/Nav'

export default {
  name: 'App',
  data(){
    return{
      poiInfo:{},
      commentNum:0
    }
  },
  components: {
    "app-header":Header,
    "app-nav":Nav
  },
  created(){
    this.$Request.get("/api/goods").then(res=>{
      this.poiInfo = res.poi_info
    })

    // 请求ratings
    this.$Request.get("/api/ratings").then(res=>{
      this.commentNum = res.comment_num
    })
  }
}
</script>

<style>

</style>
