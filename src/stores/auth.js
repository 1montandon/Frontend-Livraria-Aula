import { ref, reactive, computed } from 'vue';
import { jwtDecode } from "jwt-decode";
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import AuthService from '../services/auth.js';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: useStorage('token', null),
    decodedToken: computed(() => state.token ? jwtDecode(state.token) : "nao "),
    loading: false,
    error: null, 
    isLogged: useStorage('isLogged', false),
    email: computed(() => state.decodedToken.email),
    id: computed(() => state.decodedToken.id),
    foto: computed(() => state.decodedToken.foto),
    nome: computed(() => state.decodedToken.name),
  });
    const isLoading = computed(() => state.loading);
    const isLogged = computed(() => state.isLogged);
    const user = computed(() => {
      return {
        email: state.email,
        id: state.id,
        foto: state.foto,
        nome: state.nome,
      };
    })

    const getToken = async (user) => {
      console.log('Start of getToken');
      state.loading = true;
      try {
        console.log('Calling authService.getToken');
        const data = await authService.getToken(user);
        console.log('Token received:', data);
        state.token = data;
      } catch (error) {
        console.error('Error occurred:', error);
        state.error = error;
      } finally {
        console.log('Executing finally block');
      }
      state.loading = false;
      state.isLogged = true;
    };
    const unsetToken = async () => {
      state.token = null;
      state.isLogged = false;
    }
    


  return { state, getToken, isLoading, isLogged, user, unsetToken };
});
