<template>
    <div>
        <Navbar :my-title="title" left="返回" right="首页"></Navbar>

        <!-- <Navbar v-bind="propobj"></Navbar> -->

        <!-- <Navbar my-title="影院"></Navbar>
        <Navbar my-title="我的"></Navbar> -->

        <button @click="handleClick">click</button>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';


export default {
    data() {
        return {
            title:'首页状态',
            propobj: {
                'my-title': 'Home',
                'left': '返回',
                'right': '首页'
            }
        }
    },
    components: {
        Navbar
    },
    methods:{
        handleClick(){
            this.title='首页状态111'
        }
    }
}
</script>

