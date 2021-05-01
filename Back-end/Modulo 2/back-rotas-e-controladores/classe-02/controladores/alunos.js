const listaDeAlunos = require("../dados/listaDeAlunos");
const cursos = require("../dados/cursos");
let idDoAluno = 1;

function todosOsAlunos(req, res) {
    res.json(listaDeAlunos);
};

function umAluno(req, res) {
    const aluno = listaDeAlunos.find(aluno => aluno.id === Number(req.params.idConsultado));
    if (aluno) {
        res.json(aluno);
    } else if (!Number(req.params.idConsultado)) {
        res.status(400).json({ mensagem: "O ID deve ser um número válido." });
    } else {
        res.status(404).json({ mensagem: "O aluno não foi encontrado." });
    }
};

function validarAluno(aluno) {
    
    if (!aluno.nome) {
        return "nome do aluno não preenchido.";
    }
    if (!aluno.sobrenome) {
        return "sobrenome do aluno não preenchido.";
    }
    if (!aluno.idade) {
        return "idade do aluno não preenchida.";
    }
    if (!aluno.curso) {
        return "curso do aluno não preenchido.";
    }
    if (!aluno.nome.trim()) {
        return "nome do aluno não foi preenchido corretamente.";
    }
    if (!aluno.sobrenome.trim()) {
        return "sobrenome do aluno não foi preenchido corretamente.";
    }
    if (!aluno.curso.trim()) {
        return "curso do aluno não foi preenchido corretamente.";
    }
    if (aluno.idade < 18) {
        return "Aluno tem que ser maior de idade.";
    }
    if (typeof aluno.nome !== "string") {
        return "O nome do aluno deve ser um string.";
    }
    if (typeof aluno.sobrenome !== "string") {
        return "O sobrenome do aluno deve ser um string.";
    }
    if (typeof aluno.curso !== "string") {
        return "O curso do aluno deve ser um string.";
    }
    if (typeof aluno.idade !== "number") {
        return "A idade do aluno deve ser um numero.";
    }
    if (!cursos.includes(aluno.curso)) {
        return "Esse curso não é válido."
    }
};

function adicionarUmAluno(req, res) {
    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400).json({ erro });
        return;
    }

    for(let item of listaDeAlunos) {
        if(idDoAluno === item.id) {
            idDoAluno ++;
        }
    }

    const aluno = {
        id: idDoAluno,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso
    }
    idDoAluno++;
    listaDeAlunos.push(aluno);
    res.status(201).send();

};

function editarAluno(req, res) {
    const aluno = listaDeAlunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if (!Number(req.params.idConsultado)) {
        res.status(400).json({ mensagem: "O ID deve ser um número válido." });
        return;
    } else if (!aluno) {
        res.status(404).json({ mensagem: "O aluno a ser editado não foi encontrado." });
        return;
    }

    const erro = validarAluno({
        nome: req.body.nome ?? aluno.nome,
        sobrenome: req.body.sobrenome ?? aluno.sobrenome,
        idade: req.body.idade ?? aluno.idade,
        curso: req.body.curso ?? aluno.curso
    });

    if (erro) {
        res.status(400).json({ erro });
        return;
    }

    if (req.body.nome) {
        aluno.nome = req.body.nome;
    }

    if (req.body.sobrenome) {
        aluno.sobrenome = req.body.sobrenome;
    }

    if (req.body.idade) {
        aluno.idade = req.body.idade;
    }

    if (req.body.curso) {
        aluno.curso = req.body.curso;
    }

    res.json(aluno);
};

function substituirAluno(req, res) {

    if (!Number(req.params.idConsultado)) {
        res.status(400).json({ mensagem: "O ID deve ser um número válido." });
        return;
    }

    if(Number(req.params.idConsultado) !== req.body.id) {
        res.status(400).json({erro: "O ID informado deve ser igual ao ID do body"});
        return;
    }

    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400).json({ erro });
        return;
    }

    const aluno = listaDeAlunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if (aluno) {
        aluno.nome = req.body.nome;
        aluno.sobrenome = req.body.sobrenome;
        aluno.idade = req.body.idade;
        aluno.curso = req.body.curso;
        res.json(aluno);
    } else {
        const novoAluno = {
            id: req.body.id,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            idade: req.body.idade,
            curso: req.body.curso
        }
        
        listaDeAlunos.push(novoAluno);
        res.json(novoAluno);
    }
};

function deletarAluno(req, res) {
    const aluno = listaDeAlunos.find(aluno => aluno.id === Number(req.params.idConsultado));
    const indice = listaDeAlunos.indexOf(aluno);
    if (!Number(req.params.idConsultado)) {
        res.status(400).json({ mensagem: "O ID deve ser um número válido." });
    } else if (!aluno) {
        res.status(404).json({ mensagem: "O aluno a ser excluído não foi encontrado." });
    } else {
        listaDeAlunos.splice(indice, 1);
        res.json(aluno);
    }
};

module.exports = { todosOsAlunos, umAluno, adicionarUmAluno, editarAluno, substituirAluno, deletarAluno };