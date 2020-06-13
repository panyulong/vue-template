<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        // let url = 'http://127.0.0.1:8080/auth'
        // // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3343aa96ef214582&redirect_uri=http://127.0.0.1:8090/getUserInfo&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect'
        //  window.location.href = url
        // // this.$axios({
        // //     url:url,
        // //     methods:'get'
        // // }).then(res=>{
        // //     console.log(res)
        // // })
    },
    methods:{
         
    }
}
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #fff;
        min-height: 100vh;
    }
</style>
