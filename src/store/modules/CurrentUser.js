import axios from 'axios'

const state = {
    user: {}
};

const actions = {
    async fetchUser({ commit }) {
        const response = await axios.get(`${process.env.VUE_APP_ENDPOINT}/users/me`, {
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
    async login({ commit, }, userToLogin) {
        const response = await axios.post(`${process.env.VUE_APP_ENDPOINT}/auth/local`, userToLogin)
        try { 
            sessionStorage.setItem("token", response.data.jwt);
            commit('setUserFromFetch', response.data.user)
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
            await this.dispatch("fetchUser");
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