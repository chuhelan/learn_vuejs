<template>
    <div class="aaa" style="color: red;">
        Navbar
        <button v-bind="$attrs">
            test
        </button>
    </div>
</template>

<script>
export default {
        // 禁止透传
        inheritAttrs:false,
}
</script>