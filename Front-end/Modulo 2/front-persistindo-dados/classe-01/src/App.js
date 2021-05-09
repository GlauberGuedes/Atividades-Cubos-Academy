import './App.css';
import { useState, useRef, useEffect } from 'react';


function cronometro(props) {
  if(props.milissegundo === 100) {
    props.setMilissegundo(0);
    props.setSegundos(segundoAnterior => segundoAnterior + 1);
  }
  if (props.segundos === 60) {
    props.setSegundos(0);
    props.setMinutos(minutoAnterior => minutoAnterior + 1);
  }
  if (Number(props.minutos) === 60) {
    props.setMinutos(0);
    props.setHoras(horaAnterior => horaAnterior + 1);
    props.displayHora.current = "";
  }
}

function Iniciar(props) {
  if (props.intervalId.current) return;

  props.intervalId.current = setInterval(() => props.setMilissegundo(
    msAnterior => msAnterior + 1), 10);
}



function App() {
  const [milissegundo, setMilissegundo] = useState(0)
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [tema, setTema] = useState(localStorage.getItem('tema') ?? 'claro');
  const intervalId = useRef(null);
  const displayHora = useRef("none");

  cronometro({ segundos, minutos, horas, setSegundos, setMinutos, setHoras, displayHora, milissegundo, setMilissegundo });

  useEffect(() => {

    return () => {
      clearInterval(intervalId.current);
    }
  }, [])

  function pausar() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  function finalizar() {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setMilissegundo(0);
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    displayHora.current = "none";
  }

  function reiniciar() {
    setMilissegundo(0);
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    displayHora.current = "none";
  }

  function trocaDeTema() {
    const novoTema = tema === 'claro' ? 'escuro' : 'claro';
    setTema(novoTema);

    localStorage.setItem('tema', novoTema);
  }

  return (
    <div className={tema === 'claro' ? 'container' : 'container-escuro'} >
      <h1>Crônometro</h1>
      <div className="menu">
        <div>
          <span style={{display: `${displayHora.current}`}}>{horas}:</span>{`${minutos}`.padStart(2, "0")}:
          {`${segundos}`.padStart(2, "0")}:
          {`${milissegundo}`.padStart(2, "0")}
        </div>
        <div className={tema === 'claro' ? 'botao-cronometro' : 'botao-cronometro-escuro'}>
          <button onClick={() => Iniciar({ setMilissegundo, intervalId })}>Iniciar</button>
          <button onClick={pausar}>Pausar</button>
          <button onClick={finalizar}>Finalizar</button>
          <button onClick={reiniciar}>Reiniciar</button>
        </div>
      </div>
      <button className={tema === 'claro' ? 'troca-tema' : 'troca-tema-escuro'} onClick={trocaDeTema}>Trocar de tema</button>
    </div>
  );
}

export default App;
