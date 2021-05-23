
import './App.css';
import {useState} from "react";

const pratos = [{
  nome: "Lasanha",
  preco: 50
},
{
  nome: "Pizza",
  preco: 65
},
{
  nome: "Strogonoff",
  preco: 63
}]

const Prato = ({nome, preco, qtdInput = 0, setQuantidade}) => {
  return (
    <div>
      {nome}
            <br/>
            <input type= "number" min={0} value={qtdInput} onChange={e => setQuantidade((quantidade) => ({...quantidade, [nome]: e.target.valueAsNumber}))}/>
            {" "}X R${preco} = R${preco * qtdInput}
            
    </div>
  )
}
function App() {
  
const [quantidade, setQuantidade] = useState({});
pratos.sort((a, b) => (quantidade[b.nome] || 0) - (quantidade[a.nome] || 0))

  return (
    <div>
      <h1>Cardápio</h1>
      <ul>
        {pratos.map(prato => (
          <li key={prato.nome}>
            {console.log(quantidade)}
            <Prato
            nome={prato.nome}
            preco={prato.preco}
            qtdInput={quantidade[prato.nome] || 0}
            setQuantidade={setQuantidade}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
