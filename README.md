# gama-xp44-backend-typescript-aula11-practice

- Migrations:

 - Excluir banco de dados

 - Instalar o sequelize-cli
 
    npm install --save-dev sequelize-cli

 - Ajustar arquivo database.config.ts

 - Ajustar arquivo mysql.database.ts

 - Criar banco de dados automaticamente:

    npx sequelize db:create

 - Criar migrations

 - Rodar migrations:

    tsc && npx sequelize db:migrate
    tsc && npx sequelize db:migrate:undo:all