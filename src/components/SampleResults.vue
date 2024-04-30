<template>
    <div class="plan-container">
      <!-- Iterate over the plans and use DataCard component -->
      <DataCard 
    v-for= "plan in plans"
    :key="plan.planID"
    :planID="plan.planID"
    :overallSQFT="plan.overallSQFT"
    :stories="plan.floors"
    :heightFt="plan.heightFt"
    :heightIn="plan.heightIn"
    :lengthFt="plan.lengthFt"
    :lengthIn="plan.lengthIn"
    :widthFt="plan.widthFt"
    :widthIn="plan.widthIn"
  />
</div>
  </template>
  
  <script>
  import DataCard from './DataCard.vue'; // Adjust the path based on your directory structure
  
  export default {
    name: "SampleResults",
    components: {
      DataCard,
    },
    data() {
      return {
        plans: [],
      };
    },
    created() {
      // Fetch plans data from your backend
      // and set it to the plans data property
      this.fetchPlans();
    },
    methods: {
      async fetchPlans() {
        try {
          const response = await fetch('http://localhost:3000/plans');  // Adjust the URL if needed
          this.plans = await response.json();
        } catch (error) {
          console.error('Error fetching plans:', error);
        }
      },
    },
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
  