import './App.css';
import { useState } from 'react';
import TodasTarefas from './tarefas';
import botoes from './botoes';
import TodosChecked from './todosCheckados'


function App() {
    const [filtro, setFiltro] = useState("todos")
    const [novaTarefa, setnovaTarefa] = useState("");
    const [listaTarefas, setlistaTarefas] = useState([]);
    const [contadorID, setcontadorID] = useState(0);
    const [botao, setbotao] = useState("");
    const [TodosCheckados, setTodosCheckados] = useState('');
    const quantidadeTarefaAtiva = listaTarefas.filter(item => !item.concluida);

    function nomeTarefa(e) {   
        setnovaTarefa(e.target.value);
    }

    function adicionarTarefa(e) {
        if(novaTarefa.trim()) {
        setlistaTarefas([...listaTarefas, { nome: novaTarefa, id: contadorID, concluida: false }])
        setcontadorID(contadorID + 1);
        setnovaTarefa('');
        } 
        e.preventDefault();
    }

    return (
        <div className='container'>
            <h1>TAREFAS</h1>
            <form onSubmit={(e) => adicionarTarefa(e)}>
                <input type='checkbox' checked={TodosCheckados} onChange={() => TodosChecked({TodosCheckados, listaTarefas, setlistaTarefas, setTodosCheckados})} />
                <input type='text' value={novaTarefa} onChange={(e) => { nomeTarefa(e) }} placeholder='Criar uma tarefa' id='text' />
            </form>
            <div className='card'>
                <TodasTarefas filtro={filtro} listaTarefas={listaTarefas} setlistaTarefas={setlistaTarefas} setTodosCheckados={setTodosCheckados} />

                <div className='informacoes'>                   
                    <div>{quantidadeTarefaAtiva.length} itens restantes</div>
                    <button className={botao === "todos" ? "selecionado" : ""}
                        onClick={() => {botoes({setFiltro, setbotao}, 'todos')}}>Todas
                        </button>
                    <button className={botao === "ativas" ? "selecionado" : ""}
                        onClick={() => {botoes({setFiltro, setbotao}, 'ativas')}}>Ativas
                        </button>
                    <button className={botao === "completadas" ? "selecionado" : ""}
                        onClick={() => {botoes({setFiltro, setbotao}, 'completadas')}}>Completadas
                        </button>
                    <button
                        onClick={() => {
                            const tarefaNaoCompletada = listaTarefas.filter(item => !item.concluida);
                            setlistaTarefas(tarefaNaoCompletada);
                        }}>Limpar completadas</button>
                    <button
                        onClick={() => {
                            setlistaTarefas([]);
                        }}>Excluir todos</button>
                </div>
            </div>
        </div>
    )
}

export default App;
