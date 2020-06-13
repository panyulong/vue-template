<template>
<div>
    <h1>hello world！</h1>
</div>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
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