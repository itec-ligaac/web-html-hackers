<template>
  <div>
    <input type="text" placeholder="Country's threee letter symbol" v-model="country">
    <vk-button @click="getPastSixMonths">search</vk-button>
    <Chart
      :values="values"
    />
  </div>
</template>

<script>
    import axios from 'axios'
    import Chart from "./Chart";
    export default {
        name: "CovidStats",
        data() {
            return {
                values: null,
                country: "ROU"
            }
        },
        components: {
            Chart
        },
        created() {
            this.getPastSixMonths();
        },
        methods: {
            getCountry() {
                return this.$store.state.country
            },
            getPastSixMonths() {
                const options = {
                    method: 'GET',
                    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/' + this.country,
                    headers: {
                        'x-rapidapi-key': '3977fdf10fmsh98b7eafdc6c9a73p1166abjsn5e8c5289eb04',
                        'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
                    }
                }

                let vm = this;

                axios.request(options).then(function (response) {
                    console.log(response.data);
                    let arr = response.data.slice(0, 50).reverse();
                    vm.values = arr.map((item) => {
                        return {
                            date: (item.date.slice(-1) === '0' || item.date.slice(-2) === '01')  ? item.date : "",
                            new_cases: item.new_cases,
                            new_deaths: item.new_deaths
                        }
                    })
                }).catch(function (error) {
                    console.error(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>