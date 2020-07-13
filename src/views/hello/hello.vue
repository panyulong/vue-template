<template>
<div>
    <h1>hello world！</h1>
</div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
// import img1 from '@/assets/img/weddingTemp1/1.jpg' //js引入图片，css引入背景图片可以.bgImage(url)
export default {
  computed:{
      ...mapGetters({
          userId:'User/userId'
      })
    },
  data() {
    return {
    
    };
  },
  methods:{
    ...mapMutations({
      setUserId:'User/setUserId'
    }),
    ...mapActions({
      login:'User/login'
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
  

 
</style>