
import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/index"
import app2 from "./modules/index2"
//日志插件
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        app,
        app2
    },
    plugins: [createLogger()]
})
