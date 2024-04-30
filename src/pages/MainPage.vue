<template>
  <div class="home">
    <header>
      <h1>Welcome to Floorplan Explorer</h1>
      <p>Find your dream home with ease</p>
    </header>
    <main>
    </main>
    <footer>
      <p>&copy; 2024 Floorplan Explorer. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  color: blue;
}

p {
  color: grey;
}

main {
  display: flex;
  flex-direction: column;
}

.search, .featured-plans {
  background-color: lightgrey;
  padding: 20px;
  margin-bottom: 20px;
}

.search h2, .featured-plans h2 {
  color: black;
}

footer {
  text-align: center;
  color: grey;
}
</style>
