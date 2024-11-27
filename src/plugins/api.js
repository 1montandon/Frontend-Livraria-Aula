import axios from "axios";
import { useAuthStore } from "../stores/auth";

export const api = axios.create({
    baseURL: "http://0.0.0.0:19003/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 100000,
});

  
export function setupInterceptors() {
    const authStore = useAuthStore()
  
    api.interceptors.request.use((config) => {
      if (authStore.state.token) {
        config.headers.Authorization = `Bearer ${authStore.state.token}`
      }
      return config
    })
  }