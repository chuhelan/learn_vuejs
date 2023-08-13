<template>
    <div style="background: yellow;">
        <label>{{label}}</label>
        <input :type="type" v-model="myvalue">
    </div>
</template>

<script>
export default {
    props:{
        label:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:"text"
        }
    },
    data(){
        return{
            myvalue:''
        }
    }
}
</script>