import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  api: 'http://localhost:8800',
  nav: {},
  tags: {},
  loop: {},
  hotArticles: {},
  articles: {}
};

const mutations = {
  // 侧边栏导航
  setNav(state, data) {
    state.nav = data
  },
  // 标签
  setTags(state, data) {
    state.tags = data
  },
  // 轮播图
  setLoop(state, data) {
    state.loop = data
  },
  // 热门文章
  setHotArticles(state, data) {
    state.hotArticles = data
  },
  // 首页文章
  setArticles(state, data) {
    state.articles = data
  }
};

const getters = {};

const actions = {
  async nuxtServerInit({commit, state, req}) {
    // 产品导航
    let nav = await axios(`${state.api}/blog/nav/findAll`);
    commit('setNav', nav.data);

    // 标签
    let tags = await axios.post(`${state.api}/blog/tag/findAll`, {});
    commit('setTags', tags.data);

    // 轮播图
    let loop = await axios(`${state.api}/blog/loop/findAll`);
    commit('setLoop', loop.data);

    // 热门文章
    let hotArticles = await axios(`${state.api}/blog/article/getHotArticle`);
    commit('setHotArticles', hotArticles.data);

    // 首页文章
    let articles = await axios.post(`${state.api}/blog/article/list`, {pageSize: 10, pageNum: 1});
    commit('setArticles', articles.data);
  }
};

const store = () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
