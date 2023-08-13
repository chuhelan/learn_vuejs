<template>
    <div>
        BChild-
        <button @click="handleClick">click</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            console.log("parent:"+this.$parent.title);
            console.log("root:"+this.$root.title);
        }
    }
}
</script>