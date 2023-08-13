<template>
    <div>
        <!-- app - <button @click="handleClick()">click</button>
            <input ref="myinput" />
            <div ref="mydiv">aaaa</div>
            
            
            <Child ref="mychild" /> -->
            
            <Field label="用户名" type="text" ref="username"/>
            <Field label="密码" type="password" ref="password"/>
            <Field label="年龄" type="number" ref="age"/>

            <div>
                <button @click="handleRegister">注册</button>
                <button @click="handleReset">重置</button>
            </div>
            
        </div>
    </template>

<script>
import Child from './Child.vue';
import Field from './Field.vue';

export default {
    methods: {
        handleClick() {
            console.log(this.$refs.mychild.childtitle);
            // this.$refs.mydiv.style.background = "red"
            
            this.$refs.mychild.childtitle = "222222222"
        },
        handleRegister(){
            console.log(this.$refs.username.myvalue,this.$refs.password.myvalue,this.$refs.age.myvalue);
        },
        handleReset(){
            this.$refs.username.myvalue = ''
            this.$refs.password.myvalue = ''
            this.$refs.age.myvalue = ''
        }
    },
    components: {
        Child,
        Field
    }
}

</script>