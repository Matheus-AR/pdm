import { createContext, useState } from 'react';

import {
  criarContato,
  listarTodosContatos,
  excluirContato,
  listarContatoPeloId,
  alterarContato
} from '../services/ContatoService';

const ContatoContext = createContext();

const ContatoProvider = ({ children }) => {
  const [contatos, setContatos] = useState([]);

  const adicionar = async (nome, telefone) => {
    try {
      const novoContato = await criarContato(nome, telefone);
      setContatos([...contatos, novoContato]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const listar = async () => {
    try {
      const listaAtualizada = await listarTodosContatos();
      setContatos(listaAtualizada);
    } catch (error) {
      console.log(error.message);
    }
  };

  const buscar = async (id) => {
    try {
      const contato = await listarContatoPeloId(id);
      return contato;
    } catch (error) {
      console.log(error.message);
    }
  };

  const atualizar = async (id, nome, telefone) => {
    try {
      const contatoAtualizado = await alterarContato(id, nome, telefone);
      const listaAtualizada = contatos.map((contato) => contato.id === id ? contatoAtualizado : contato);
      setContatos(listaAtualizada);
    } catch (error) {
      console.log(error.message);
    }
  };

  const remover = async (id) => {
    try {
      await excluirContato(id);
      const index = contatos.findIndex((contato) => contato.id === id);
      contatos.splice(index, 1);
      setContatos([...contatos]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ContatoContext.Provider
      value={{ contatos, adicionar, listar, buscar, atualizar, remover }}>
      {children}
    </ContatoContext.Provider>
  );
};

export default ContatoProvider;
export { ContatoContext };
