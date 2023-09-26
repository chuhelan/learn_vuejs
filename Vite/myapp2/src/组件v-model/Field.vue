<template>
    <div style="background: yellow;">
        <label>{{label}}</label>
        <input :type="type" :value="modelValue" @input="handleInput">
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
        },
        modelValue:{
            type:String,
            default:''
        },
    },
    data(){
        return{
            myvalue:''
        }
    },
    methods:{
        handleInput(event){
            console.log(event.target.value);
            this.$emit("update:modelValue",event.target.value)
        }
    }
}
</script>