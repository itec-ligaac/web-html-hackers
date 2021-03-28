import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: "ROU"
  },
  mutations: {
    setCountry(state, newCountry) {
      let arr = []
      let vm = this
      const options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
        headers: {
          'x-rapidapi-key': '3977fdf10fmsh98b7eafdc6c9a73p1166abjsn5e8c5289eb04',
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        arr = response.data
      }).catch(function (error) {
        console.error(error);
      });

      for (let i=0; i < arr.length; i++) {
        if (arr[i].Country === newCountry) {
          state.country = arr[i].ThreeLetterSymbol
        }
      }
      // !!!!!!!!!!!!!!!!!!!!!!!!!!
      // will recieve name country in Romanian from Google Places
      // but will try to compare with name in english from vaccovid-coronavirus-vaccine-and-treatment-tracker
      // ergo will not find the country to get it's three-letter-symbol to use later
      // !!!!!!!!!!!!!!!!!!!!!!!!!!
    }
  },
  actions: {
  },
  modules: {
  }
})
