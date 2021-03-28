<template>
  <vk-grid>
    <la-cartesian :data="values" v-if="values" class="uk-width-1-1">
      <la-line dot curve :width="3" prop="new_cases"></la-line>
      <la-line dot curve :width="3" prop="new_deaths"></la-line>
      <la-x-axis prop="date"></la-x-axis>
      <la-tooltip></la-tooltip>
    </la-cartesian>
    <h4><b style="color: #43aeda">New Cases</b><br><b style="color: #83ddc3">New Deaths</b></h4>
  </vk-grid>
</template>

<script>
    export default {
        name: "Chart",
        props: {
            values: null
        }
    }
</script>

<style scoped>
</style>