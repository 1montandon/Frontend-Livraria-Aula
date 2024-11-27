import { api } from "../plugins/api";

class AutoresService {

    async getAutores(){
    try {
        const { data } = await api.get("api/autores/");
        return data.results;
    }
    catch (error){
        console.log(error);
    }}


    async addAutor(autor){
    try{
        const { data } = await api.post("api/autores/", autor)
        return data.results;
    }
    catch (error){
        console.log(error);
    }}

    async updateAutor(autor){
        try{
            const { data } = await api.put(`api/autores/${autor.id}/`, autor)
            return data.results;
        }
        catch(error){
            console.log(error);
        }
    }
    
    async deleteAutor(id){
        try{
            const { data } = await api.delete( `api/autores/${id}/`)
            return data.results;
        }
        catch{
            console.log(error);
        }
    }


}


export default AutoresService;
