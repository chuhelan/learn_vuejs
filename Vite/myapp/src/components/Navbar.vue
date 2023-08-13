<template>
    <div>
        <button @click="handleClick" v-bind="$attrs">展开/折叠侧边栏</button>
        <div>Vue3单文件Navbar</div>
    </div>
</template>

<style scoped>
    div{
        background: gray;
    }
</style>

<script>
export default {
    inheritAttrs:false,
    methods:{
        handleClick(){
            console.log("click");
        }
    }
}
</script>