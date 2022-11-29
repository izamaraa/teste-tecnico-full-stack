import { DataSource } from "typeorm";
import { Client } from "./entities/client.entity";
require("dotenv").config();

// E então instanciamos um novo DataSource,
// É importante comentar, que existem diferente tipos de conexão,
// e com isso, diferentes maneiras de configurar esta classe.
// Isso tem a ver com o suporte do TypeORM a diversos SGBDs, como
// MySQL, MariaDB, SQLite, Oracle e entre outros.
// No nosso caso, vamos usar o modelo de conexão para o Postgres
export const AppDataSource = new DataSource({
  // especificamos o SGBD que vamos utilizar com o "type"
  type: "postgres",

  // o host, como estamos no ambiente de desenvolvimento, será o local
  host: "localhost",

  // a porta, padrão do Postgres 5432
  port: 5432,

  // e aqui as credenciais do Postgres como configuramos no .env
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  // o synchronize, é uma flag que indica se a database precisa ser
  // recriada a cada vez que o servidor entra em execução. Seu uso
  // em um ambiente de produção não é recomendado. Pode ser uma
  // ferramenta útil para desenvolvimento e debug,

  // Se deixarmos true, e fizermos alguma mudanca nas tabelas do banco
  // toda vez que o servidor for executado ele identificará essas
  // mudanças e fará a recriação da database para aplicar as
  // alterações.
  // Vamos deixar false, e controlaremos a estrutura da database
  // únicamente por meio das Migrations que vamos ver em seguida.
  synchronize: false,

  // O Logging, como o nome sugere, permite que recebamos feedbacks
  // dos processos que o TypeORM é responsável através do terminal
  // onde o servidor estará rodando.
  logging: true,

  // Aqui em entities, vamos registrar as Entidades que temos
  // na aplicação, passando o caminho de onde as entidades ficarão.
  entities: [Client],

  // Nessa chave migrations, apontamos onde ficarão os arquivos das
  // Migrations na nossa aplicação, dessa maneira, pegamos todos os
  // arquivos .ts que estiverem dentro da pasta migrations.
  migrations: ["src/migrations/*.ts"],
});

// Aqui, estamos de fato estabelecendo a conexão através do método
// da classe DataSource, initialize. Ele retorna uma promise, que quando
// bem-sucedida, estabelece a conexão ao banco, ou então caimos em um
// erro.
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
