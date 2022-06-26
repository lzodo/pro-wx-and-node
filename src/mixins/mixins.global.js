import Vue from 'vue'
import router from '../router'
Vue.mixin({
    data() {
        return {
            mindate: 1
        }
    },
    methods: {
        routerPush(path, query) {
            if (router.history.current.path != path) {
                router.push({
                    path: path,
                    query: query
                })
            }
        }
    },
})