<template>
  <div class="root">
    <Navbar class="navbar" @click="handleClick"></Navbar>
    <Layout class="layout" :myShow="isShow"></Layout>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Layout from './components/Layout.vue'

export default {
  components:{
    Navbar,
    Layout
  },
  data(){
    return {
      isShow:true
    }
  },
  methods:{
    handleClick(){
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.root{
  display: flex;
  flex-direction: column;
  height: 100px;
}

.navbar{
  height: 50px;
}

.layout{
  flex: 1;
  display: flex;
}
</style>