

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, MySQL
- **Frontend**: React, Vite
- **Banco de Dados**: MySQL

## Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- MySQL Server
- npm ou yarn

### Passo a Passo

1. **Clone o repositório** ou navegue até a pasta do projeto.

2. **Configure o banco de dados**:
    - Abra e copie o script SQL localizado em `bd/pjbl_bd.sql`
    - Abra o MySql Workbench ou outro SGBD
    - Cole e execute o script para criar o banco de dados `pjbl_davi_natume`, a tabela `produtos` e inserir dados iniciais.

3. **Instale as dependências do backend**:
Abra um Command Prompt no diretório do projeto e cole os comandos:
   ```
   cd backend
   npm i express nodemon cors mysql2
   ```

4. **Instale as dependências do frontend**:
Abra outro Command Prompt no diretório do projeto e cole os comandos:
   ```
   cd ../frontend
   npm install
   ```

5. **Execute o backend**:
   ```
   cd backend
   npm start
   ```
   O servidor backend será iniciado na porta 8800.

6. **Execute o frontend**:
   ```
   cd frontend
   npm run dev
   ```
   O frontend será iniciado na porta 5173 (padrão do Vite).

7. **Acesse o sistema**:
   - Abra o navegador e vá para `http://localhost:5173`.
   - O sistema permitirá gerenciar produtos: adicionar, editar, excluir e visualizar.

## Funcionalidades

- Listar produtos
- Criar novo produto (com validação de preços inteiros)
- Editar produto existente
- Excluir produto
- Validação de entrada no frontend

## Estrutura do Projeto

- `backend/`: Código do servidor Express
- `frontend/`: Aplicação React
- `backend/db.js`: Configuração do banco de dados
- `backend/routes/produtos.js`: Rotas da API RESTful
- `backend/controllers/produtos.js`: Lógica dos controladores
- `frontend/src/components/`: Componentes React (Modal, Card, ListaProdutos)
- `frontend/src/styles/`: Estilização das classes dos componentes
