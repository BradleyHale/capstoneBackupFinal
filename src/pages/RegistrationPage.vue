<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="password" required>
        <br>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegistrationPage",
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
          });
          if (response.ok) {
            alert('Registration successful!');
            // Redirect to login page or any other page
            this.$router.push('/login');
          } else {
            const data = await response.json();
            alert(data.message);
          }
        } catch (error) {
          console.error('Error registering user:', error);
          alert('An error occurred. Please try again later.');
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add CSS styles for the registration form */
  </style>
  