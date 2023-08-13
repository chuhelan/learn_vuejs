<template>
    <div>
        content
        <button @click="handleClick">click</button>
    </div>
</template>

<script>
    export default{
        methods:{
            handleClick(){
                // console.log("click");
                fetch("/api/mmdb/movie/v3/list/hot.json?ct=%E6%97%A0%E9%94%A1&ci=52&channelId=4")
                .then(res=>res.json()).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>