import ListaPessoas from "./lista";
import photosnap from "./assets/photosnap.svg";
import manage from "./assets/manage.svg";
import account from "./assets/account.svg";
import myhome from "./assets/myhome.svg";
import loopstudios from "./assets/loop-studios.svg";
import faceilt from "./assets/faceit.svg";
import shortly from "./assets/shortly.svg";
import insure from "./assets/insure.svg";
import eyecam from "./assets/eyecam-co.svg";
import theair from "./assets/the-air-filter-company.svg";
import iconefechar from "./assets/icon-remove.svg";
import { useState,useRef, useEffect } from "react";
import "./App.css";

const array = [];

function App() {
  const [listaDeFiltro, setListaDeFiltro] = useState([]);
  const [aparecerFiltro, setAparecerFiltro] = useState(false);
  const [Frontend, setFrontend] = useState(false);
  const [Backend, setBackend] = useState(false);
  const [Fullstack, setFullstack] = useState(false);
  const [Midweight, setMidweight] = useState(false);
  const [Python, setPython] = useState(false);
  const [Reactt, setReactt] = useState(false);
  const [Junior, setJunior] = useState(false);
  const [Sass, setSass] = useState(false);
  const [JavaScript, setJavascript] = useState(false);
  const [CSS, setCSS] = useState(false);
  const [Ruby, setRuby] = useState(false);
  const [RoR, setRoR] = useState(false);
  const [HTML, setHTML] = useState(false);
  const [Django, setDjango] = useState(false);
  const [Vue, setVue] = useState(false);
  const [Senior, setSenior] = useState(false);
  const [Rub, setRub] = useState(false);

  useEffect(() => {
    if(listaDeFiltro.length === 0) {
      setAparecerFiltro(false);
    }
  },[listaDeFiltro])

  function excluirUmFiltro (nome) {
    if (nome === "Frontend") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setFrontend(false);
    }
    if(nome === "Backend") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setBackend(false);
    }
    if(nome === "Fullstack") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setFullstack(false);
    }
    if(nome === "Midweight") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setMidweight(false);
    }
    if(nome === "Python") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setPython(false);
    }
    if(nome=== "React") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setReactt(false);
    }
    if(nome === "Junior") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setJunior(false);
    }
    if(nome === "Sass") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setSass(false);
    }
    if(nome === "JavaScript") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setJavascript(false);
    }
    if(nome === "CSS") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setCSS(false);
    }
    if(nome === "HTML") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setHTML(false);
    }
    if(nome === "Ruby") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setRuby(false);
    }
    if(nome === "RoR") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setRoR(false);
    }
    if(nome === "Django") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setDjango(false);
    }
    if(nome === "Vue") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setVue(false);
    }
    if(nome === "Senior") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setSenior(false);
    }
    if(nome === "Rub") {
      const index = array.indexOf(nome);
      array.splice(index, 1);
      setRub(false);
    }
  }

  function fecharTodosOsFiltros () {
    setFrontend(false);
    setBackend(false);
    setFullstack(false);
    setMidweight(false);
    setPython(false);
    setReactt(false);
    setJunior(false);
    setSass(false);
    setJavascript(false);
    setCSS(false);
    setHTML(false);
    setRuby(false);
    setRoR(false);
    setDjango(false);
    setVue(false);
    setSenior(false);
    setRub(false);

    array.splice(0, array.length);
    setListaDeFiltro([]);
    setAparecerFiltro(false);
    
  }

  function ligando () {
    
    if(array.find(string => string === "Frontend")) {
      setFrontend(true);
    }
    if(array.find(string => string === "Backend")) {
      setBackend(true);
    }
    if(array.find(string => string === "Fullstack")) {
      setFullstack(true);
    }
    if(array.find(string => string === "Midweight")) {
      setMidweight(true);
    }
    if(array.find(string => string === "Python")) {
      setPython(true);
    }
    if(array.find(string => string === "React")) {
      setReactt(true);
    }
    if(array.find(string => string === "Junior")) {
      setJunior(true);
    }
    if(array.find(string => string === "Sass")) {
      setSass(true);
    }
    if(array.find(string => string === "JavaScript")) {
      setJavascript(true);
    }
    if(array.find(string => string === "CSS")) {
      setCSS(true);
    }
    if(array.find(string => string === "HTML")) {
      setHTML(true);
    }
    if(array.find(string => string === "Ruby")) {
      setRuby(true);
    }
    if(array.find(string => string === "RoR")) {
      setRoR(true);
    }
    if(array.find(string => string === "Django")) {
      setDjango(true);
    }
    if(array.find(string => string === "Vue")) {
      setVue(true);
    }
    if(array.find(string => string === "Senior")) {
      setSenior(true);
    }
    if(array.find(string => string === "Rub")) {
      setRub(true);
    }
  }

  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <div className="filtro" style={{display: aparecerFiltro ? "" : "none"}}>
          <div className="lista-filtro">
            {listaDeFiltro.map((filtro) => {
              return (
                <div className="filtro-botao">
                  <p>{filtro}</p>
                  <button onClick= {() => {
                    const indice = listaDeFiltro.indexOf(filtro);
                    const novaLista = listaDeFiltro.slice(0, indice);
                    const novaLista2 = listaDeFiltro.slice(indice +1);
                    const nova = novaLista.concat(novaLista2);
                    console.log(nova);
                    setListaDeFiltro(nova);
                    excluirUmFiltro(filtro);
                    
                  }}>
                    <img src={iconefechar} />
                  </button>
                </div>
              );
            })}
          </div>
          <button onClick={fecharTodosOsFiltros}>Clear</button>
        </div>
        <div className="lista">
          {(Backend || Junior || Fullstack || Midweight || Python || Reactt || Sass || Ruby || RoR || Django|| Vue || Rub) ? "" :
          <ListaPessoas
            nome="Photosnap"
            foto={photosnap}
            balaoNome="NEW"
            background="#5CA5A5"
            balao2Nome="FEATURED"
            background2="#2B3939"
            stack="Senior Frontend Developer"
            data="1d ago"
            data2="Full Time"
            data3="USA Only"
            botao={["Frontend", "Senior", "HTML", "CSS", "JavaScript"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          /> 
          }
           {(Backend || Junior || Sass || Ruby || RoR || Django|| Vue || Rub || Frontend || Senior || HTML || CSS || JavaScript) ? "" :
          <ListaPessoas
            nome="Manage"
            foto={manage}
            balaoNome="NEW"
            background="#5CA5A5"
            balao2Nome="FEATURED"
            background2="#2B3939"
            stack="Fullstack Developer"
            data="1d ago"
            data2="Part Time"
            data3="Remote"
            botao={["Fullstack", "Midweight", "Python", "React"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          />  }
           {(Backend || Fullstack || Midweight || Python || Ruby || RoR || Django|| Vue || Rub || Senior || HTML || CSS ) ? "" :
          <ListaPessoas
            nome="Account"
            foto={account}
            balaoNome="NEW"
            background="#5CA5A5"
            stack="Junior Frontend Developer"
            data="2d ago"
            data2="Part Time"
            data3="USA Only"
            botao={["Frontend", "Junior", "React", "Sass", "JavaScript"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          />  }
           {(Backend || Fullstack || Midweight || Python || Reactt || Sass || Ruby || RoR || Django|| Vue || Rub || Senior || HTML) ? "" :
          <ListaPessoas
            nome="My Home"
            foto={myhome}
            stack="Junior Frontend Developer"
            data="5d ago"
            data2="Contract"
            data3="USA Only"
            botao={["Frontend", "Junior", "CSS", "JavaScript"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          />  }
           {(Backend || Junior || Python || Reactt || RoR || Django|| Vue || Rub || Frontend || Senior || HTML || CSS ) ? "" :
          <ListaPessoas
            nome="Loop Studios"
            foto={loopstudios}
            stack="Software Engineer"
            data="1w ago"
            data2="Full Time"
            data3="Worldwide"
            botao={["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          />  }
           {(Fullstack || Midweight || Python || Reactt || Sass || Ruby || Django|| Vue || Frontend || Senior || HTML || CSS || JavaScript) ? "" :
          <ListaPessoas
            nome="Facelt"
            foto={faceilt}
            stack="Junior Backend Developer"
            data="2w ago"
            data2="Full Time"
            data3="UK Only"
            botao={["Backend", "Junior", "Rub", "RoR"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          /> }
           {(Backend || Fullstack || Midweight || Python || Reactt || Ruby || RoR || Django|| Vue || Rub || Senior || CSS) ? "" :
          <ListaPessoas
            nome="Shortly"
            foto={shortly}
            stack="Junior Developer"
            data="2w ago"
            data2="Full Time"
            data3="Worldwide"
            botao={["Frontend", "Junior", "HTML", "Sass", "JavaScript"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          /> }
           {(Backend || Fullstack || Midweight || Python || Reactt || Ruby || RoR || Django || Rub || Senior || HTML || CSS ) ? "" :
          <ListaPessoas
            nome="Insure"
            foto={insure}
            stack="Junior Frontend Developer"
            data="2w ago"
            data2="Full Time"
            data3="USA Only"
            botao={["Frontend", "Junior", "Vue", "JavaScript", "Sass"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          /> }
           {(Backend || Junior || Reactt || Sass || Ruby || RoR || Vue || Rub || Frontend || Senior || HTML || CSS ) ? "" :
          <ListaPessoas
            nome="Eyecam Co"
            foto={eyecam}
            stack="Full Stack Engineer"
            data="3w ago"
            data2="Full Time"
            data3="Worldwide"
            botao={["Fullstack", "Midweight", "JavaScript", "Django", "Python"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          /> }
           {(Backend  || Fullstack || Midweight || Python || Ruby || RoR || Django|| Vue || Rub || Senior || HTML || CSS ) ? "" :
          <ListaPessoas
            nome="The Air Filter Company"
            foto={theair}
            stack="Front-end Dev"
            data="1mo ago"
            data2="Part Time"
            data3="Worldwide"
            botao={["Frontend", "Junior", "React", "Sass", "JavaScript"]}
            listaDeFiltro={listaDeFiltro}
            setListaDeFiltro={setListaDeFiltro}
            ligando = {ligando}
            array = {array}
            setAparecerFiltro = {setAparecerFiltro}
          /> }
        </div>
      </div>
    </div>
  );
}

export default App;
