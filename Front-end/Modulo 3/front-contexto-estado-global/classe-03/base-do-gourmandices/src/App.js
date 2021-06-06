import { useState } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";
import ContextoDoCarrinho from "./contexto";

export default function App() {
  const [carrinho, setCarrinho] = useState({});

  const adicionarAoCarrinho = (id) => {
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + 1;
      return novoCarrinho;
    });
  };

  const mudarQtdNoCarrinho = (id, qtd) => {
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;
      return novoCarrinho;
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      delete novoCarrinho[id];

      return novoCarrinho;
    });
  };
  const valorDoContexto = {
    carrinho,
    removerDoCarrinho,
    mudarQtdNoCarrinho,
    adicionarAoCarrinho,
    produtos,
  };
  return (
    <div className="App">
      <ContextoDoCarrinho.Provider value={valorDoContexto}>
        <Cabecalho />
        <Produtos />
      </ContextoDoCarrinho.Provider>
    </div>
  );
}
