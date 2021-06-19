import axios from 'axios'

const state = {
    currentUser: {}
};

const actions = {
    async fetchCurrentUser({ commit }) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/users/me`, {
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('setCurrentUserFromFetch', response.data)
            // console.log(response.data)
        } catch (error) {
            console.log('Error:', error);
        }
    },
    async login({ commit, }, userToLogin) {
        const response = await axios.post(`${process.env.VUE_APP_ENDPOINT}/auth/local`, userToLogin)
        try { 
            sessionStorage.setItem("token", response.data.jwt);
            commit('setCurrentUserFromFetch', response.data.user)
        } catch (error) {
            console.log('Error:', error);
        }
    },
    logout() {
        sessionStorage.removeItem("token"); 
    },
    async register({ commit, }, newUser) {
        console.log("ignore", commit);
        const response = await axios.post(`${process.env.VUE_APP_ENDPOINT}/auth/local/register`, newUser)

        try {
            sessionStorage.setItem("token", response.data.jwt);
            await this.dispatch("fetchCurrentUser");
        } catch (error) {
            console.log('Error:', error);
        }
    },
}

const mutations = {
    setCurrentUserFromFetch: (state, user) => state.currentUser = user
};
const getters = {
    getCurrentUser: state => state.currentUser
};

export default {
    state,
    getters,
    actions,
    mutations,
}