import axios from 'axios'

const state = {
    posts: [],
    post: {}
};

const actions = {
    async getPosts({ commit }) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/posts`, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('setPosts', response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    },
    async getSinglePost({ commit }, id) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/posts/${id}`, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('setSinglePost', response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    },
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
    setSinglePost: (state, post) => state.post = post
};
const getters = {
    allPosts: state => state.posts,
    singlePost: state => state.post
};

export default {
    state,
    getters,
    actions,
    mutations,
}