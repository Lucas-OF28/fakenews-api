----------- API FakeNews Saúde -----------

Nosso trabalho implementa uma API de fakenews para a area de saúde, utilizando Node.js e o framework Express.js junto com o pacote Mongoose para conexão com banco MongoDB.


-------Link dos repositórios----------


Git: https://gitlab.com/MarkDev96/fakenewssaude-back

Heroku: https://fakenews-saude.herokuapp.com

------ Operações -------
-GET "/confirmados" para retornar o total de confirmados por COVID
-GET "/mortes" para retornar o total de mortes por COVID
-GET "/?limite" para definir um limite na api
-GET "/?pagina" para definir quantidade de paginas
-GET "/" - retorna lista com todos os sites
-GET "/:id" - retorna uma noticia com o `id` especificado
-POST "/" - salva uma nova noticia com o conteúdo do `body` (corpo) da requisição
-PUT /:id - modifica uma noticia com o `id` especificado com o conteúdo do `body` (corpo) da requisição
-DELETE "/:id" - deleta um noticia com o `id` especificado

Ex GET: https://fakenews-saude.herokuapp.com/api/saude?limite=2

Retorno ex:
[
  {
    "_id": "619c3a619dfb6e0023ead1c8",
    "nome": "teste",
    "url": "teste.com",
    "data": "2021-11-22T00:00:00.000Z",
    "descricao": "",
    "__v": 0
  },
  {
    "_id": "619c3a6e9dfb6e0023ead1ca",
    "nome": "teste2",
    "url": "teste2.com",
    "data": "2021-11-23T00:00:00.000Z",
    "descricao": "",
    "__v": 0
  }
]

------------- Esquema --------------
````js
{
    nome: String,
    url: String,
    data: Date,
    descricao: String
}
`````
----------------------------------------
BODY JSON auth:
{
 "username": "fakesaude", 
 "password": "1234"
}

Retorno esperado Ex:

{
  "loginToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYWtlc2F1ZGUiLCJpYXQiOjE2Mzc2MjgxMTUsImV4cCI6MTY0MDIyMDExNX0.peQR6WyYCB2jKSEaP42lv1pizge5bad3mZwIxJnzcsk"
}
