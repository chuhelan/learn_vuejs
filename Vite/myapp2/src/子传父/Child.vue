<template>
    <div>
        child
        <button @click="handleClick">click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            childTitle: "child-122222"
        }
    },
    methods: {
        handleClick() {
            // console.log(this.childTitle);
            this.$emit("event",this.childTitle)
        }
    }
}
</script>

<style scoped>
div {
    background: yellow;
}
</style>