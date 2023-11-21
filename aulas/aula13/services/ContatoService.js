import axios from 'axios';

const BASE_URL = 'https://backend-mobile-472b7-default-rtdb.firebaseio.com';

//GET listar todos contatos
const listarTodosContatos = async () => {
  try {
    const contatos = [];
    const response = await axios.get(`${BASE_URL}/contatos/data.json`);
    for (name in response.data) {
      contatos.push({ id: name, ...response.data[name] });
    }
    return contatos;
  } catch (error) {
    console.log(error);
  }
};
//GET listar um contato
const listarContatoPeloId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/contatos/data/${id}.json`);
    return { id, ...response.data };
  } catch (error) {
    console.log(error);
  }
};

//POST criar um contato
const criarContato = async (nome, telefone) => {
  try {
    const response = await axios.post(`${BASE_URL}/contatos/data.json`, {
      nome,
      telefone,
    });
    return { id: response.data.name, nome, telefone };
  } catch (error) {
    console.log(error);
  }
};

//PUT alterar um contato
const alterarContato = async (id, nome, telefone) => {
  try {
    const response = await axios.put(`${BASE_URL}/contatos/data/${id}.json`, {
      nome,
      telefone,
    });
    return {id, ...response.data}
  } catch (error) {
    console.log(error);
  }
};

//DELETE excluir um contato
const excluirContato = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/contatos/data/${id}.json`);
  } catch (error) {
    console.log(error);
  }
};

export {
  criarContato,
  listarTodosContatos,
  excluirContato,
  listarContatoPeloId,
  alterarContato,
};
