import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import AuthService from '../services/auth.js';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: useStorage('token', null),
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
  });

  const getToken = async (user) => {
   const data = await authService.getToken(user);
   console.log(data)  
   state.token = data
  };

  return { state, getToken };
});
