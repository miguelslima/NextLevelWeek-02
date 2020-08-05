import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes)

app.listen(3333, () => {
  console.log('Rodando na porta 3333!');
});


/** Métodos */

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

/** Parâmetros */

//Corpo (Request body): Dados para criação ou atualização de um registro;
//Route Params: Identificar qual recurso(registro) eu quero atualizar ou deletar
//Query Params: Páginação, filtros, ordenação

// app.get('/users', (request, response) => {
//   const users = [
//     { name: 'Miguel', age: 34},
//     { name: 'Magda', age: 38},
//   ];
  
//   return response.json(users)
// });

// app.post('/users', (request, response) => {
//   console.log(request.body)

//   const users = [
//     { name: 'Miguel', age: 34},
//     { name: 'Magda', age: 38},
//   ];
  
//   return response.json(users)
// });

// app.delete('/users/:id', (request, response) => {
//   console.log(request.params);

//   return response.send('Usuario deletado')
// });


