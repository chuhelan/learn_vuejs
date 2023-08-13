<template>
    <div>
        <button v-show="leftShow">{{ left }}</button>
        navbar--{{ myTitle }}
        <button v-show="rightShow">{{ right }}</button>
    </div>
</template>

<script>
export default {
    // props: ["myTitle", "left", "right","leftShow","rightShow"]
    props:{
        myTitle:String,
        left:[String,Number],
        right:{
            require:true,
            //
            validator(value){
                return ['success','warning','danger'].includes(value)
            }
        },
        leftShow:{
            // require:true,
            type:Boolean,
            default:true
        },
        rightShow:{
            type:Boolean,
            default:true
        }
    }
}
</script>