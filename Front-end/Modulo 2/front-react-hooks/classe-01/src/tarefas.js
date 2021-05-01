function filtrar(listaTarefas, filtro) {
    if (filtro === 'todos') {
        return listaTarefas;
    } else if (filtro === 'ativas') {
        return listaTarefas.filter(item => !item.concluida);
    } else if (filtro === 'completadas') {
        return listaTarefas.filter(item => item.concluida);
    } else {
        return listaTarefas;
    }
}


export default function TodasTarefas({filtro, listaTarefas, setlistaTarefas, setTodosCheckados}) {

    const arrayListaTarefas = filtrar(
        listaTarefas,
        filtro
    );

    return (
    <ul>
        {arrayListaTarefas.map(item => {
            return (
                <li>
                    <input type='checkbox' id={item.id} checked={item.concluida} onChange={(e) => {
                        const novoArray = listaTarefas.map(item => {
                            if (item.id === Number(e.target.id)) {
                                item.concluida = !item.concluida;
                            }
                            return item;
                        });
                        setlistaTarefas(novoArray);
                        setTodosCheckados(novoArray.every(item => item.concluida));
                    }
                    } />
                    <label htmlFor={item.id}>{item.nome}</label>
                </li>
            )
        })}
    </ul>
    )
}