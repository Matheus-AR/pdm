import { createContext, useState } from 'react';

const ContatoContext = createContext();

const ContatoProvider = ({ children }) => {
  const [contatos, setContatos] = useState([
    {id: 1, nome: 'matheus', telefone: '1111-1111'}
  ]);

  const adicionar = (nome, telefone) => {
    const novoContato = { id: contatos.length + 1, nome, telefone };
    setContatos([...contatos, novoContato]);
  };

  const buscar = (id) => {
    return contatos.find((item) => item.id === id);
  };

  const atualizar = (id, nome, telefone) => {
    const contatoAtualizado = { id, nome, telefone };
    const listAtualizada = contatos.map((item) => item.id ? contatoAtualizado : item);
    setContatos(listAtualizada);
  };

  const remover = (id) => {
    const listAtualizada = contatos.filter((item) => item.id !== id);
    setContatos(listAtualizada);
  };

  return (
    <ContatoContext.Provider value={{ contatos, adicionar, buscar, atualizar, remover }}>
      {children}
    </ContatoContext.Provider>
  )
}

export default ContatoProvider;
export { ContatoContext };