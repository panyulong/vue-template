import {
  getUserId
} from '@/api/userApi';
const state = {
  userId: 'pan-cli',
};
const getters = {
  userId: (state) => state.userId,
};
const mutations = {
  setUserId(state, userId) {
    state.userId = userId;
  },
};
const actions = {
  getUserId({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      getUserId(params).then((res) => {
          if (res) {
            res.id && commit('setUserId', res.id);
            // commit('User/setUserId', '', { //其他vuex调用
            //   root: true
            // });
            resolve();
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};