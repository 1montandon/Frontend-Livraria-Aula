import { api } from "../plugins/api";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await api.get("api/categorias/");
    return data.results;
  }
  async adicionarCategoria(categoria) {
    const { data } = await api.post("api/categorias/", categoria);
    return data.results;
  }
  async atualizarCategoria(categoria) {
    const { data } = await api.put(`api/categorias/${categoria.id}/`, categoria);
    return data.results;
  }
  async excluirCategoria(id) {
    const { data } = await api.delete(`api/categorias/${id}/`);
    return data.results;
  }
}
