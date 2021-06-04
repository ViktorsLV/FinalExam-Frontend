import axios from 'axios'

const state = {
    usersReviews: [],
};

const actions = {
    async getUsersReviews({
        commit
    }, userId) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/reviews?post.booking.author=${userId}`, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('setUsersReviews', response.data)
            console.log(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    },
}

const mutations = {
    setUsersReviews: (state, reviews) => state.usersReviews = reviews,
};
const getters = {
    usersReviews: state => state.usersReviews,
};

export default {
    state,
    getters,
    actions,
    mutations,
}