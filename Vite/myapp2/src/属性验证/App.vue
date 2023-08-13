<template>
    <div>
        <Navbar :my-title="title" 
        left="返回" right="success" 
        :leftShow="true" :rightShow="true">
    </Navbar>
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

