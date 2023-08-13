<template>
    <div>
        app
        <AParent></AParent>
    </div>
</template>

<script>
import AParent from './AParent.vue';

export default {
    data(){
        return{
            title:'app-111111'
        }
    },
    components:{
        AParent
    }
}
</script>