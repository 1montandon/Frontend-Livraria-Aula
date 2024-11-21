import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import AutoresService from "../services/autores";

export const useAutoresStore = defineStore('autor', () => {
    const state = reactive({
        autores: [],
        loading: false,
        error: null,
        autor: [],
    })
    const isLoading = computed(() => state.loading)
    const autores = computed(() => state.autores)
    const autor = computed(() => state.autor)

    const getAutores = async () => {
        state.loading = true
        try{
            state.autores = await AutoresService.getAutores()
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }
    
    const createAutor = async (autor) => {
        state.loading = true
        try{
            state.autor = await AutoresService.addAutor(autor)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }

    const updateAutor = async (autor) => {
        state.loading = true
        try{
            state.autor = await AutoresService.updateAutor(autor)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }

    const deleteAutor = async (id) => {
        state.loading = true
        try{
            state.autor = await AutoresService.deleteAutor(id)
        }
        catch(error){
            state.error = error
        }
        finally{
            state.loading = false
        }
    }
    return { getAutores, createAutor, updateAutor, deleteAutor, autores, autor, isLoading, state }
})
