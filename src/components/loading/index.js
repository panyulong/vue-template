import loadingComponent from './Loading.vue';

const Loading = {
    install: function (Vue) {
        Vue.component('Loading', loadingComponent)
    }
}

export default Loading