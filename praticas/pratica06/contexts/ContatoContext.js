import { useState, createContext } from 'react';

const ContatoContext = createContext();

const ContatoProvider = ({ children }) => {
  const [contatos, setContatos] = useState([]);

  const adicionar = (nome) => {
    setContatos([...contatos, nome]);
  }

  return (
    <ContatoContext.Provider value={{ contatos, adicionar }}>
      {children}
    </ContatoContext.Provider>
  )
}

export default ContatoProvider;
export { ContatoContext };