const express = require('express');
const app = express(); //Executando o express.

app.set('view engine', 'ejs'); //O mecanismo de engine a ser usado.
app.set('views', './app/views'); //Diretório onde os arquivos estão localizados.

const rotaHome = require('./app/routes/home');
const rotaAdicionarUsuario = require('./app/routes/adicionar-usuario');
const rotaHistoria = require('./app/routes/historia');
const rotaCursos = require('./app/routes/cursos');
const rotaProfessores = require('./app/routes/professores');

rotaHome(app);
rotaAdicionarUsuario(app);
rotaHistoria(app);
rotaCursos(app);
rotaProfessores(app);

app.listen(3000, function(){
  console.log("Servidor iniciado.");
});