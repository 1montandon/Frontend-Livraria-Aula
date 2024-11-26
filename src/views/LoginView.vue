<script setup>
import axios from 'axios'
import {onMounted, reactive} from 'vue'
import { useAuthStore } from '../stores/auth';

const authStore = new useAuthStore();

const user = reactive({
  email: 'comprador@a.com',
  password: 'senha.123'

})
</script>

<template>
  <div class="container">
    <h1>Login</h1>
    <div class="authContainer">
      <form>
        <input type="email" placeholder="email" v-model="user.email"/>
        <input type="password" placeholder="Password" v-model="user.password" />
      </form>
      <button @click="authStore.getToken(user)">Login</button>
      <hr>
      token {{ authStore.state.token }}
      <hr>
      decoded {{ authStore.decodedToken?.name }}
      <hr>
      {{ authStore.state }}
      

    </div>
  </div>
</template>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 20px;
  color: #333;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

h1 {
  font-size: 2.0rem;
  color: #343a40;
  margin-bottom: 30px;
  text-align: center;
}

.authContainer {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

@media (max-width: 600px) {
  .authContainer {
    padding: 20px;
    max-width: 90%;
  }
}
</style>
