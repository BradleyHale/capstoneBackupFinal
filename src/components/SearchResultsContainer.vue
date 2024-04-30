<!-- SearchResultsContainer.vue -->
<template>
  <div class="plan-container">
    <!-- Iterate over the searchData JSON objects and use DataCard component -->
    <DataCard
        v-for="(result, index) in state.results"
        :key="index"
        :planID="result.planID"
        :overallSQFT="result.overallSQFT"
        :lengthFt="result.lengthFt"
        :lengthIn="result.lengthIn"
        :widthFt="result.widthFt"
        :widthIn="result.widthIn"
        :heightFt="result.heightFt"
        :heightIn="result.heightIn"
        :floors="result.floors"
      />
  </div>
  
  
  </template>
  
  <script>
  import DataCard from './DataCard.vue'
  import { reactive } from 'vue'
  
  export default {
    name: "SampleResults",
    components: {
    DataCard
    },
    data() {
      return {
        state: reactive ({
          results: []
        })
      }
    },
    mounted() {
      // Listen for the 'searchData' event emitted by the event bus
      this.emitter.on('searchData', this.handleSearchData);
    },
    beforeUnmount() {
      // Remember to clean up the event listener to avoid memory leaks
      this.emitter.off('searchData', this.handleSearchData);
    },
    methods: {
      handleSearchData(searchData) {
        // Handle the emitted searchData here, such as filling the 'results' array
        console.log(searchData)
        this.state.results = searchData;
      }
    }
  };
  </script>
  
  <style scoped>
  .plan-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  </style>
  