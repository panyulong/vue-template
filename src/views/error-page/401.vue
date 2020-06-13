<template>
  <error-content code="401" desc="Oh~~您没有浏览这个页面的权限~" :src="src"/>
</template>

<script>
import errorContent from './error-content.vue'
export default {
  name: 'error_401',
  components: {
    errorContent
  },
  data () {
    return {
      src: '/img/error-page/error-401.svg'
    }
  }
}
</script>
