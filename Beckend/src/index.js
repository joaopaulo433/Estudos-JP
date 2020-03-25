const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/** 
 * Rotas / Rescursos
 */

 /**
  * Metodos Http:
  * 
  * GET - Buscar uma informção no Beck-end
  * POST - Criar uma informação no Bech-end
  * PUT - Alterar uma informação no Beck-end
  * DELETE - Deletar uma informaçao no Beck-end
  */

  /**
   * 
   * Tipos de Parametros
   * 
   * Query Params: Parametros nomeados enviados na rota após o "?"" ( filtros, paginação)
   * Route Params: Utilizados par identificar recursos
   * Request Body: Corpo da requizição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MYSQL, SQL LITE,POSTGRESQL, ORAQLE, MICROSOFT SQL SERVER
    * NoSQL: MONGODB, COUCHDB, ETC
    */

    /**
     * Driver: Select * from user
     * Query Builder: tabel('users').select('*').where()
     */


app.listen("3333");