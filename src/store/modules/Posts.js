import axios from 'axios'

const state = {
    posts: [],
    post: {},
    usersPosts: [],
    bookedPosts: []
};

const actions = {
    /* GET requests */
    async getPosts({
        commit
    }) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/posts?booked=false`, {
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
    async getBookedPosts({
        commit
    }, userId) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/bookings?author.id=${userId}`, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('setBookedPosts', response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    },

    /* POST requests */
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
    async bookPost({ commit }, {postId, booked}) {
        const response = await axios.post(`${process.env.VUE_APP_ENDPOINT}/posts/${postId}/booking`, {booked}, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('addBookedPost', response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    },
    async changePostState({ commit }, {postId, booked}) {
        const response = await axios.put(`${process.env.VUE_APP_ENDPOINT}/posts/${postId}`, {booked}, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('updatePost', response.data)
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
    setBookedPosts: (state, posts) => state.bookedPosts = posts,

    addPost: (state, post) => state.posts.unshift(post),
    addBookedPost: (state, post) => state.bookedPosts.unshift(post),

    updatePost: (state, id) => (state.posts.findIndex(post => post.id === id)),
};
const getters = {
    allPosts: state => state.posts,
    usersPosts: state => state.usersPosts,
    bookedPosts: state => state.bookedPosts,
    singlePost: state => state.post
};

export default {
    state,
    getters,
    actions,
    mutations,
}