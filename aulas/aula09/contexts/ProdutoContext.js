import { createContext } from 'react';

const ProdutoContext = createContext();

const ProdutoProvider = ({ children }) => {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 1.0000,00',
      imagens: [
        'https://img.freepik.com/psd-gratuitas/novo-modelo-flutuante-de-smartphone_252953-7.jpg?w=740&t=st=1698708864~exp=1698709464~hmac=0664871f02bc17db2b082b32c59aa2267ba0084d8b4bc4983ae3f773ba5d0988',
        'https://img.freepik.com/psd-gratuitas/modelo-de-maquete-premium-tela-do-telefone-movel_53876-81688.jpg?w=740&t=st=1698708826~exp=1698709426~hmac=a826e3e95a93c8dec1f041dadcbca891d55dd89f964165af85c01f96028d355f',
        'https://img.freepik.com/vetores-gratis/maquete-de-smartphone-de-vista-frontal-realista-moldura-roxa-de-iphone-movel-com-display-branco-em-branco-vetor_90220-959.jpg?w=826&t=st=1698708463~exp=1698709063~hmac=56f3ff9fe9a6a408ea879b0f0ad79e5a44af703c1b006dcd448bd33e3619b3d2',
      ],
    },
    { id: 2, nome: 'Headset', preco: 'R$ 400,00', imagens: [] },
    { id: 3, nome: 'Tablet', preco: 'R$ 2.0000,00', imagens: [] },
  ];

  const findProduto = (id) => {
    return produtos.find((produto) => produto.id === id);
  };
  return (
    <ProdutoContext.Provider value={{ produtos, findProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};

export default ProdutoProvider;
export { ProdutoContext };
