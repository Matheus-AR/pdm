
import { createContext, useState } from 'react';

import { criarContato, listarTodosContatos, excluirContato } from '../services/ContatoService';

const ContatoContext = createContext();

const ContatoProvider = ({ children }) => {
  const [contatos, setContatos] = useState([]);

  const adicionar = async (nome, telefone) => {
    try{
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
  }
	
  const buscar = (id) => {};

  const atualizar = (id, nome, telefone) => {};

  const remover = async (id) => {
    try {
      await excluirContato(id);
      const index = contatos.findIndex((contato) => contato.id === id);
      contatos.splice(index, 1);
      setContatos([...contatos]);
    } catch (error) {
      console.log(error);
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
