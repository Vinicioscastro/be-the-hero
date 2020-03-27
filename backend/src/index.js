const express = require ('express');
const routes = require("./routes");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * rotas / recursos
 * 
 */

/*
* metodos https
* GET: buscar uma informação do back end
*POST: criar uma informação no backend
*PUT: auterar uma informação
* DELETE: deletar uma informação
* 
*/


/**
 *tipos de parametros:
  * query: parametros enviados na rota após o simbode de ? serve para filtros e paginação
 * route params: identificar recursos
 * request body: corpo da requisicao, ultilizado para criar e alterar 
 * 
 */

 /**
  * SQL: Mysql, sqlite, postgreSQL, oracle, microsoft sql server
  * NoSQL: MongoDB, CouchBR, etc.
  * 
  *  
  * 
  */



app.listen(3333);