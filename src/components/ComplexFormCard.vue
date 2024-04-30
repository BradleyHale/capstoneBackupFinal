<template>
  <div class="card">
    <h2>Search Floorplans</h2>
    <form @submit.prevent="submitForm">
      <!-- ID input -->
      <div class="form-field">
        <label for="id">ID: </label>
        <input type="text" id="id" v-model="formData.id">
      </div>

      <!-- Width Range input -->
      <div class="form-field">
        <label>Width Range:</label>
        <div class="range-inputs">
          <input type="number" v-model="formData.minWidth" placeholder="Min">
          <input type="number" v-model="formData.maxWidth" placeholder="Max">
        </div>
      </div>

      <!-- Height Range input -->
      <div class="form-field">
        <label>Height Range:</label>
        <div class="range-inputs">
          <input type="number" v-model="formData.minHeight" placeholder="Min">
          <input type="number" v-model="formData.maxHeight" placeholder="Max">
        </div>
      </div>

      <!-- Sq. Feet Range input -->
      <div class="form-field">
        <label>Sq. Feet Range:</label>
        <div class="range-inputs">
          <input type="number" v-model="formData.minSqFeet" placeholder="Min">
          <input type="number" v-model="formData.maxSqFeet" placeholder="Max">
        </div>
      </div>

      <!-- Stories input -->
      <div class="form-field">
        <label for="stories">Stories: </label>
        <input type="number" id="stories" v-model="formData.stories">
      </div>

      <!-- Submit button -->
      <button type="submit">Search</button>
    </form>

    <!-- Display search results -->
    <div v-if="searchResults.length > 0">
      <h3>Search Results</h3>
      <ul>
        <li v-for="plan in searchResults" :key="plan.planID">
          {{ plan.planID }} - {{ plan.overallSQFT }} sqft
          <!-- Display other plan details as needed -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        id: "",
        minWidth: null,
        maxWidth: null,
        minHeight: null,
        maxHeight: null,
        minSqFeet: null,
        maxSqFeet: null,
        stories: null
      },
      searchResults: []
    };
  },
  methods: {
    submitForm() {
      // Make API call to fetch search results
      fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(response => response.json())
      .then(data => {
        this.searchResults = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  }
}
</script>

<style scoped>
/* Your existing styles */
</style>

<style scoped>
.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.form-field {
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
}

.range-inputs {
  display: flex;
  align-items: center;
}

.range-inputs input {
  margin-right: 10px;
}

input[type="number"] {
  width: 80px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
