import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get("api/categorias/");
    return data.results;
  }
  async adicionarCategoria(categoria) {
    const { data } = await axios.post("api/categorias/", categoria);
    return data.results;
  }
  async atualizarCategoria(categoria) {
    const { data } = await axios.put(`api/categorias/${categoria.id}/`, categoria);
    return data.results;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`api/categorias/${id}/`);
    return data.results;
  }
}
