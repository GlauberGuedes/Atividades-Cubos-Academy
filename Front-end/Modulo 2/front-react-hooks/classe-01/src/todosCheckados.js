export default function TodosChecked({TodosCheckados, listaTarefas, setlistaTarefas, setTodosCheckados}) {
    if (TodosCheckados) {
        const TodaLista = listaTarefas.map(item => {
            item.concluida = false;
            return item;
        })
        setlistaTarefas(TodaLista);
    } else {
        const TodaListaFalse = listaTarefas.map(item => {
            item.concluida = true;
            return item;
        })
        setlistaTarefas(TodaListaFalse);
    }
    if (TodosCheckados === true) {
        setTodosCheckados(false);
    } else {
        setTodosCheckados(true);
    }
}