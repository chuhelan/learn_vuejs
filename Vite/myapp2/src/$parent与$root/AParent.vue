<template>
    <div>
        parent
        <BChild/>
    </div>
</template>

<script>
import BChild from './BChild.vue';

export default {
    components:{
        BChild
    },
    data(){
        return{
            title:'parent-1111111'
        }
    }
}
</script>