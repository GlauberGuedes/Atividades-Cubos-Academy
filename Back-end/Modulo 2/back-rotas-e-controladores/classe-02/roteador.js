const express = require("express");
const roteador = express();
const alunos = require("./controladores/alunos");

roteador.get("/alunos", alunos.todosOsAlunos);
roteador.get("/alunos/:idConsultado", alunos.umAluno);
roteador.post("/alunos", alunos.adicionarUmAluno);
roteador.patch("/alunos/:idConsultado", alunos.editarAluno);
roteador.put("/alunos/:idConsultado", alunos.substituirAluno);
roteador.delete("/alunos/:idConsultado", alunos.deletarAluno);

module.exports = roteador;