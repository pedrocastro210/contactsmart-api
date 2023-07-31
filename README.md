# Contact Smart - API

Contact Smart - API é uma API desenvolvida usando Express e TypeScript. O objetivo desta API é fornecer uma experiência fácil e intuitiva para que os usuários possam armazenar e gerenciar seus contatos de forma eficiente.

## Funcionalidades

A API possui endpoints para realizar as seguintes funcionalidades:

- Criar um novo usuário com informações como nome, e-mail, senha e número de telefone.
- Logar com um usário existente.
- Atualizar as informações do usuário.
- Excluir o usuário.
- Criar um novo contato com informações como nome, número de telefone, e-mail.
- Recuperar a lista completa de contatos armazenados.
- Atualizar as informações de um contato existente.
- Excluir um contato da lista.

## Instalação e Execução

Siga as instruções abaixo para configurar e executar a API localmente:

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.

2. Crie um Banco de Dados pelo terminal:

```bash
CREATE DATABASE meu_banco_de_dados;
```

3. Clone o repositório do GitHub para o seu computador:

```bash
git clone git@github.com:pedrocastro210/contactsmart-api.git
```

4. Navegue até o diretório do projeto:

```bash
cd contact-smart-api
```

5. Instale as dependências do projeto:

```bash
npm install
```

### Configurando seu Banco de Dados

6. Na raiz do projeto, crie um arquivo <code>.env</code> seguindo o arquivo <code>.env.example</code> como base, modificando com as suas configurações.

### Após configurar seu Banco de Dados

7. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A API será executada em http://localhost:3000.

## Endpoints

A API possui os seguintes endpoints:

- `POST /login`: Logar com um usuário. Os dados do usuário devem ser enviados no corpo da requisição em formato JSON.

```bash
    {
        email: "test@mail.com",
        password: "1234"
    }
```

- `POST /users`: Cria um novo usuário. Os dados do usuário devem ser enviados no corpo da requisição em formato JSON.

```bash
    {
        name: "Test"
        email: "test@mail.com",
        password: "1234",
        telephone: "+55 (00) 98765-4321
    }
```

- `GET /users`: Retorna o usuário que está logado.

- `PATCH /users`: Atualiza as informações do usuário logado com base no TOKEN fornecido. Os dados atualizados do usuário devem ser enviados no corpo da requisição em formato JSON.

```bash
    {
        password: "test"
    }
```

- `DELETE /users`: Exclui o usuário que está logado com base no TOKEN fornecido.

- `POST /contacts`: Cria um novo contato. Os dados do contato devem ser enviados no corpo da requisição em formato JSON.

```bash
    {
        name: "Contact",
        email: "contact@mail.com",
        telephone: "+55 (11) 98765-4321"
    }
```

- `GET /contacts`: Retorna a lista completa de contatos.

- `PATCH /contacts/:id`: Atualiza as informações de um contato existente com base no ID fornecido. Os dados atualizados do contato devem ser enviados no corpo da requisição em formato JSON.

```bash
    {
        name: "Contact 2"
    }
```

- `DELETE /contacts/:id`: Exclui um contato da lista com base no ID fornecido.

## Tecnologias Utilizadas

- Express: Framework web para criação de APIs em Node.js.
- TypeScript: Superconjunto do JavaScript que adiciona tipagem estática ao código.

## Banco de Dados

Para esta versão inicial, a API utilizará um banco de dados local, sendo nescessário fazer a instalação descrito nos passos anteriores, para armazenar os contatos.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests ou abrir issues relatando problemas ou sugestões.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

## Contato

Se você tiver alguma dúvida ou quiser entrar em contato, envie um e-mail para phfdecastro@hotmail.com ou visite meu site em https://portifolio-pedrocastro.vercel.app/.

```

```
