<template>
  <div>
    <!-- <Button size="large" type="text" @click="backHome">返回首页</Button> -->
    <!-- <Button size="large" type="text">返回上一页({{ second }}s)</Button> -->
       <!-- <vant-button size="large" type="text" @click="backPrev">返回上一页</vant-button> -->
       <van-button  type="info" size="small" @click="backPrev">返回上一页({{ second }}s)</van-button>
  </div>
</template>

<script>
import './error.less'
export default {
  name: 'backBtnGroup',
  data () {
    return {
      second: 6,
      timer: null
    }
  },
  methods: {
    // backHome () {
    //   this.$router.replace({
    //     name: '/'
    //   })
    // },
    backPrev () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
