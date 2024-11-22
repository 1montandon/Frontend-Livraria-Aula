import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import AutoresService from "../services/autores";

const autoresService = new AutoresService();

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
            state.autores = await autoresService.getAutores()
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
            state.autor = await autoresService.addAutor(autor)
            await getAutores()

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
            state.autor = await autoresService.updateAutor(autor)
            await getAutores()  
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
            state.autor = await autoresService.deleteAutor(id)
            await getAutores()

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
