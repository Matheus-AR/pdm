import { createContext, useState } from 'react';

import {
  listarTodos,
  listarPeloId,
  incluir,
  alterar,
  excluir,
} from '../services/ContatoService';

const ContatoContext = createContext();

const ContatoProvider = ({ children }) => {
  const [contatos, setContatos] = useState([]);

  const adicionar = async (nome, telefone) => {
    try {
      const contatoNovo = await incluir(nome, telefone);
      setContatos([...contatos, contatoNovo]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const listar = async () => {
    try {
      const listaAtualizada = await listarTodos();
      setContatos(listaAtualizada);
    } catch (error) {
      console.log(error.message);
    }
  };

  const buscar = async (id) => {
    try {
      return await listarPeloId(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const atualizar = async (id, nome, telefone) => {
    try {
      const contatoAtualizado = await alterar(id, nome, telefone);
      const listaAtualizada = contatos.map((contato) =>
        contato.id === id ? contatoAtualizado : contato
      );
      setContatos(listaAtualizada);
    } catch (error) {
      console.log(error.message);
    }
  };

  const remover = async (id) => {
    try {
      await excluir(id);
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
