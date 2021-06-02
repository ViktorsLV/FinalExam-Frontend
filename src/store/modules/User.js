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
    // async editProfile({ commit }, {id, profile_image, firstName, lastName, about, birthdate, city, mobileNumber, occupation}) { 
    //     const formData = new FormData()
        
    //     formData.append('profile_image', profile_image)
    //     formData.append('firstName', firstName)
    //     formData.append('lastName', lastName)
    //     formData.append('about', about)
    //     formData.append('birthdate', birthdate)
    //     formData.append('city', city)
    //     formData.append('mobileNumber', mobileNumber)
    //     formData.append('occupation', occupation)

    //     const response = await axios.put(`${process.env.VUE_APP_ENDPOINT}/users/${id}`, formData, {
    //         headers: {
    //            'Content-Type': 'multipart/form-data',
    //             'Accept': "application/json",
    //             'Authorization': "Bearer " + sessionStorage.getItem("token")
    //         }
    //     })
    //     try {
    //         commit('updateProfile', response.data)
    //         console.log(response.data)
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // },
    async editProfile({ commit }, {id, firstName, lastName, about, birthdate, city, mobileNumber, occupation}) { 

        const response = await axios.put(`${process.env.VUE_APP_ENDPOINT}/users/${id}`, {id, firstName, lastName, about, birthdate, city, mobileNumber, occupation}, {
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })
        try {
            commit('updateProfile', response.data)
            console.log(response.data)
        } catch (error) {
            console.log('Error:', error);
        }
    },
}

const mutations = {
    setUserFromFetch: (state, user) => state.user = user,
    updateProfile: (state, user) => state.user = user
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