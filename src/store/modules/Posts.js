import axios from 'axios'

const state = {
    posts: [],
    post: {},
    usersPosts: {}
};

const actions = {
    async getPosts({
        commit
    }) {
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
    async getSinglePost({
        commit
    }, id) {
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
    async getUsersPosts({
        commit
    }, userId) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/posts?author.id=${userId}`, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('setUsersPosts', response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    },
    async createPost({
        commit
    }, {
        city,
        street,
        doorNumber,
        bagNumber,
        zip,
        date,
        time,
        bagWeight,
        bagType,
        comments
    }) {
        const response = await axios.post(`${process.env.VUE_APP_ENDPOINT}/posts`, {
            city,
            street,
            doorNumber,
            bagNumber,
            zip,
            date,
            time,
            bagWeight,
            bagType,
            comments
        }, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('addPost', response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    },
}

const mutations = {
    setPosts: (state, posts) => state.posts = posts,
    setSinglePost: (state, post) => state.post = post,
    setUsersPosts: (state, posts) => state.usersPosts = posts,
    addPost: (state, post) => state.posts.unshift(post)
};
const getters = {
    allPosts: state => state.posts,
    usersPosts: state => state.usersPosts,
    singlePost: state => state.post
};

export default {
    state,
    getters,
    actions,
    mutations,
}