import axios from 'axios';

const BASE_URL = 'https://backend-mobile-472b7-default-rtdb.firebaseio.com'

//GET listar todos os contatos
const listarTodosContatos = async () => {
  try {
    const contatos = [];
    const response = await axios.get(`${BASE_URL}/contatos/data.json`);
    for (name in response.data) {
      contatos.push({id: name, ...response.data[name]});
    }
    return contatos;
    
  } catch (error) {
    console.log(error);
  }
}
//GET listar um contato

//POST criar um contato
const criarContato = async (nome, telefone) => {
  try {
    const response = await axios.post(`${BASE_URL}/contatos/data.json`, {
      nome,
      telefone
    });
    return {id: response.data.nome, nome, telefone };
  } catch (error) {
    console.log(error)
  }
}
//PUT alterar um contato

//DELETE excluir um contato
const excluirContato = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/contatos/data/${id}.json`);
  } catch (error) {
    console.log(error)
  }
}

export { criarContato, listarTodosContatos, excluirContato }