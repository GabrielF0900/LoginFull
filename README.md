

---

# 🔐 LoginFull

**LoginFull** é um sistema Full Stack completo e funcional, com **autenticação implementada**, **controle de acesso por papéis** e interface simples. Ele permite que usuários se registrem, façam login, acessem áreas protegidas e façam logout com segurança.

Esse é o meu **primeiro projeto full stack finalizado**, e representa um grande marco nos meus estudos de desenvolvimento web!

---

## 🚀 Tecnologias utilizadas

### 🔸 Frontend (`Frontend/`)

* React
* CSS puro
* TypeScript
* Vite
* ESLint

### 🔹 Backend (`Backend/`)

* Node.js
* Express
* TypeScript
* **JWT** (autenticação)
* **bcryptjs** (hash seguro de senhas)
* Prisma ORM
* PostgreSQL
* Docker

---

## ✅ Funcionalidades

* ✅ Registro de usuários
* ✅ **Autenticação com JWT já implementada**
* ✅ Logout (remoção do token no frontend)
* ✅ Hash seguro de senhas com bcrypt
* ✅ Controle de acesso baseado em papéis (`admin`, `user`)
* ✅ Backend modularizado com middlewares e rotas organizadas

---

## 📁 Estrutura do Projeto

```bash
MeuProjeto/
├── Backend/
│   ├── node_modules/
│   ├── prisma/
│   ├── src/
│   ├── .dockerignore
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── Dockerfile
│   ├── Dockerfile.backend
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── server.ts
│   └── tsconfig.json
│
├── Frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .dockerignore
│   ├── .gitignore
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
```

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos

* [Node.js](https://nodejs.org/) instalado
* [PostgreSQL](https://www.postgresql.org/) rodando localmente ou via Docker
* [Docker](https://www.docker.com/) (opcional)

### 🔧 Backend

```bash
# Acesse a pasta do backend
cd Backend

# Instale as dependências
npm install

# Configure o .env com base no .env.example
# Exemplo:
DATABASE_URL=postgresql://usuario:senha@localhost:5432/seubanco
JWT_SECRET=sua_chave_secreta

# Execute as migrations
npx prisma migrate dev

# Rode o servidor
npm run dev
```

### 🎨 Frontend

```bash
# Acesse a pasta do frontend
cd ../Frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

---


## 📫 Contato

📧 **[gabrielcfonline0900@gmail.com](mailto:gabrielcfonline0900@gmail.com)**
📱 **(71) 99720-9361**

Se quiser ver o código ou dar sugestões, estou sempre aberto para trocar ideias!

---

## 🖼️ Imagens do Projeto

### Dashboard

![Dashboard](docs/images/dashboard.jpg)

### Login

![Login](docs/images/login.jpg)

### Register

![Register](docs/images/register.jpg)

