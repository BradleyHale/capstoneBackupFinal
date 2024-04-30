<!--FloorplanSearch.vue-->
<!-- FloorplanSearch.vue -->
<template>
  <div>
    <!-- Your other content -->
    <router-link to="/add">
      <button>Go to Add Page</button>
    </router-link>
  </div>
  <div>
    <!-- Your other content -->
    <router-link to="/edit">
      <button>Edit Plan</button>
    </router-link>
  </div>
  <div>
    <!-- SearchForm component -->
    <search-form @search="performSearch"></search-form>
    
    <!-- Container for DataCard components -->
<search-results-container></search-results-container>
  </div>


  <br>
  <br>
  <div>

  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
//import SearchResultsContainer from '../components/SearchResultsContainer.vue'
import SearchResultsContainer from '@/components/SearchResultsContainer.vue';


export default {
  components: { SearchForm, SearchResultsContainer },
  name: "FloorplanSearch",
  data() {
    return {
      searchQuery: '',
      results: [],
    }
  },
  methods: {
    performSearch(query) {
      // Update the results array with the filtered data
      this.searchQuery = query;
      this.results = this.filterResults(query);
    },
    filterResults(query) {
      // Your search criteria logic goes here
      // For now, let's say we are filtering by planID
      return this.results.filter(result => {
        return result.planID.toString().includes(query);
      });
    }
  },
};
</script>