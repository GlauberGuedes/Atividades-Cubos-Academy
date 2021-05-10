const todosBotoes = [{
  nome: "Frontend",
  estado: true
},{
  nome: "Backend",
  estado: true
},{
  nome: "Fullstack",
  estado: true
},{
  nome: "Midweight",
  estado: true
},{
  nome: "Python",
  estado: true
},{
  nome: "React",
  estado: true
},{
  nome: "Junior",
  estado: true
},{
  nome: "Sass",
  estado: true
},{
  nome: "Javascript",
  estado: true
},{
  nome: "CSS",
  estado: true
},{
  nome: "Ruby",
  estado: true
},{
  nome: "RoR",
  estado: true
},{
  nome: "HTML",
  estado: true
},{
  nome: "Vue",
  estado: true
},{
  nome: "Django",
  estado: true
},
]




export default function ListaPessoas (props) {


    return ( 
          <div className="elemento" style={{border:`${props.balao2Nome ? "": "none"}`}}>
            <img src={props.foto} />
            <div className="conteudo">
              <div className="nomes">
                <h3>{props.nome}</h3>
                <div className="balao">
                  <span style={{background:`${props.background}`}}>{props.balaoNome}</span>
                  <span style={{background:`${props.background2}`}}>{props.balao2Nome}</span>
                </div>
              </div>
              <h2>{props.stack}</h2>
              <div className="data">
                <p>{props.data}</p>
                <p>{props.data2}</p>
                <p>{props.data3}</p>
              </div>
            </div>
            <div className="botoes">
                {props.botao.map(botoes => {
                    return (
                        <button onClick={() => {
                          props.setListaDeFiltro([...props.listaDeFiltro, botoes]);
                          props.array.push(botoes);
                          props.ligando();
                          props.setAparecerFiltro(true);
                          console.log(props.array);
                        }}>{botoes}</button>
                    )
                })}
            </div>
          </div>
    )
}