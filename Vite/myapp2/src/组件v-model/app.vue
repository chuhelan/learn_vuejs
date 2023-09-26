<template>
    <div>
        {{ myvalue }}
        <!-- <input type="text" v-model="myvalue"> -->
        <!-- <input type="text" :value="myvalue" @input="myvalue=$event.target.value"> -->

        <Field label="用户名" v-model="myvalue"/>

        <button @click="handleRegister">注册</button>
        <button @click="handleReset">重置</button>

    </div>
</template>
<script>
import Field from './Field.vue'
export default {
    data() {
        return {
            myvalue: 'aaa'
        }
    },
    methods:{
        handleInput(event){
            console.log(event.target.value);
            this.myvalue = event.target.value
        },
        handleRegister(){
            console.log('注册',this.myvalue);
        },
        handleReset(){
            console.log('重置');
            this.myvalue = ''
        },
        handleEvent(value){
            // console.log(value);
            this.myvalue = value
        }
    },
    components: {
        Field
    }
}
</script>