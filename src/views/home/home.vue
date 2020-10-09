<template>
  <div class="home">
    <loading :show="showLoading"></loading>
    <p>{{ userId }}</p>
    <img src="img/street.png" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      userId: 'User/userId',
    }),
  },
  data() {
    return {
      showLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false;
    }, 1000);
  },
  methods: {
    ...mapMutations({
      setUserId: 'User/setUserId',
    }),
    ...mapActions({
      getUserId: 'User/getUserId',
    }),
    getUserId() {
      getUserId()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          this.showLoading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
