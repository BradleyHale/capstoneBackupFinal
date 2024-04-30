<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
      <span>{{ currentPage }} / {{ totalPages }} {{ PaginationLabel }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalPages: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
      PaginationLabel: {
        type: String,
        default: 'Page',
      },
    },
    methods: {
      prevPage() {
        this.$emit('pageChanged', this.currentPage - 1);
      },
      nextPage() {
        this.$emit('pageChanged', this.currentPage + 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .pagination button {
    margin: 0 10px;
  }
  </style>
  