<!--SearchForm.vue-->
<!-- SearchForm.vue -->
<template>
  <!--<form @submit.prevent="handleSubmit">
    <div class="card">
      <div class="card-content">
        <h2 class="card-title">{{ title }}</h2>
        <div class="card-details">
          <p><strong>Search by Total SqFt:</strong></p>
          <div class="flexbox-input-container">
            <input type="number" v-model="search.totalSqFt.minSqFt" placeholder="Min">
            <input type="number" v-model="search.totalSqFt.maxSqFt" placeholder="Max">
          </div>
          
          <p><strong>Search by Length Range:</strong></p>
          <div class="flexbox-input-container">
            <input type="number" v-model="search.length.minFeet" placeholder="Min"> ft 
            <input type="number" v-model="search.length.maxFeet" placeholder="Max"> ft
          </div> 

          <p><strong>Search by Width Range:</strong></p>
          <div class="flexbox-input-container">
            <input type="number" v-model="search.width.minFeet" placeholder="Min"> ft 
            <input type="number" v-model="search.width.maxFeet" placeholder="Max"> ft 
          </div>
          
          <p><strong>Search by Height Range:</strong></p>
          <div class="flexbox-input-container">
            <input type="number" v-model="search.height.minFeet" placeholder="Min"> ft 
            <input type="number" v-model="search.height.maxFeet" placeholder="Max"> ft 
          </div>
          
          <p><strong>Search by Stories:</strong> <input type="number" v-model="search.stories"></p>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  </form> -->
  <div class="search-form">
    <form @submit.prevent="handleSearch" id="searchByOperations">
      <div class ="flexbox-input-container">
        <label for="SQFT">SQFT</label>
        <input type="checkbox" id="SQFT" name="searchOperations" value="searchBySQFT">
        <input type="number" id="SQFTLower" name="SQFTLower" placeholder="Min ft.">
        <input type="number" id="SQFTUpper" name="SQFTUpper" placeholder="Max ft." ><br><br>
      </div>

      <div class ="flexbox-input-container">
        <label for="Width">Width</label>
        <input type="checkbox" id="Width" name="searchOperations" value="searchByWidth">
        <input type="number" id="widthLower" name="widthLower" placeholder="Min ft.">
        <input type="number" id="widthUpper" name="widthUpper" placeholder="Max ft."><br><br>
      </div>

      <div class="flexbox-input-container">
        <label for="Length">Length</label>
        <input type="checkbox" id="Length" name="searchOperations" value="searchByLength">
        <input type="number" id="lengthLower" name="lengthLower" placeholder="Min ft.">
        <input type="number" id="lengthUpper" name="lengthUpper" placeholder="Max ft."><br><br>
      </div>

      <div class="flexbox-input-container">
        <label for="Height">Height</label>
        <input type="checkbox" id="height" name="searchOperations" value="searchByHeight">
        <input type="number" id="HeightLower" name="HeightLower" placeholder="Min ft.">
        <input type="number" id="HeightUpper" name="HeightUpper" placeholder="Max ft."><br><br>
      </div>
        <input type="submit" value="Search"/>
      </form>
    </div>

</template>

<script>




export default {
  data() {
    return {
    }
  },
  methods: {
    async handleSearch() {
      try {
        // Prepare the query parameters based on the form inputs
        const formData = new FormData(document.getElementById('searchByOperations'));
        const queryParams = new URLSearchParams(formData);

        // Send a GET request to the "/api/search" endpoint with the query parameters
        const response = await fetch(`http://localhost:3000/api/search?${queryParams}`);
        
        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
      
        // Parse the JSON response
        const searchData = await response.json();
        // Emit the 'searchData' event with the search results using the event bus
        this.emitter.emit('searchData', searchData);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>

<style scoped>
.data-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.search-form {
  width: 300px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-details p {
  margin-bottom: 10px;
}

.card-details input {
  margin-left: 10px;
  width: 60px;
}

.card-details button {
  margin-top: 10px;
}

.flexbox-input-container {
  display: flex;
  gap: 10px;
  padding: 4px;

}

.flexbox-input {
  width: 75px;
}

input[type="number"] {
  width: 80px;
}

input[type="submit"] {
  border: 3px solid #333;
  border-radius: 12px;
  background-color: #006eff;
  padding: 10px 28px;
  display: inline-block;
  color: #ffffff;
  font-weight: bold;
}


</style>