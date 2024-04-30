<!--LoginPage-->
<template>
  <form action="http://localhost:3000/login" method="POST" class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" id="email" name ="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<script>

export default {
  data() {
    return {
      errorMessage: null,
    };
  },
  methods: {
    async login() {
      try {
        // Prepare the form data
        const formData = new FormData(document.getElementById('loginInfo'));

        // Send a POST request to the login endpoint
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          body: formData,
        });

        // Check if the response is okay
        if (!response.ok) {
          throw new Error('Failed to login');
        }

        // Optionally handle successful login
        console.log('Login successful');
      } catch (error) {
        // Handle errors
        console.error('Error:', error);
        this.errorMessage = error.message; // Display error message
      }
    },
  },
};
</script>