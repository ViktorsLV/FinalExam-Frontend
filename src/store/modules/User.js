import axios from 'axios'

const state = {
    user: {}
};

const actions = {
    async fetchUser({ commit }, id) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/users/${id}`, {
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('setUserFromFetch', response.data)
            console.log(response.data)
        } catch (error) {
            console.log('Error:', error);
        }
    },
}

const mutations = {
    setUserFromFetch: (state, user) => state.user = user
};
const getters = {
    getUser: state => state.user
};

export default {
    state,
    getters,
    actions,
    mutations,
}