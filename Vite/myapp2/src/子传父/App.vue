<template>
    <div>
        app
        <Child @event="handleEvent"/>
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    components: {
        Child
    },
    methods:{
        handleEvent(data){
            console.log("app-event",data);
        }
    }
}
</script>