import api from "../plugins/api";

export default class AutoresService {

    async getAutores(){
    try {
        const { data } = await api.get("/autores/");
        console.log(data.results, "error");
        return data.results;
    }
    catch (error){
        console.log(error);
    }}


    async addAutor(autor){
    try{
        const { data } = await api.post("/autores/", autor)
        return data.results;
    }
    catch (error){
        console.log(error);
    }}

    async updateAutor(autor){
        try{
            const { data } = await api.put(`/autores/${autor.id}/`, autor)
            return data.results;
        }
        catch(error){
            console.log(error);
        }
    }
    
    async deleteAutor(id){
        try{
            const { data } = await api.delete( `/autores/${id}/`)
            return data.results;
        }
        catch{
            console.log(error);
        }
    }


}



