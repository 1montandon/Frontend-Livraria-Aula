import axios from "axios";

class AutoresService {

    async getAutores(){
    try {
        const { data } = await axios.get("/autores/");
        return data.results;
    }
    catch (error){
        console.log(error);
    }}


    async addAutor(autor){
    try{
        const { data } = await axios.post("/autores/", autor)
        return data.results;
    }
    catch (error){
        console.log(error);
    }}

    async updateAutor(autor){
        try{
            const { data } = await axios.put(`/autores/${autor.id}/`, autor)
            return data.results;
        }
        catch(error){
            console.log(error);
        }
    }
    
    async deleteAutor(id){
        try{
            const { data } = await axios.delete( `/autores/${id}/`)
            return data.results;
        }
        catch{
            console.log(error);
        }
    }


}


export default AutoresService;
