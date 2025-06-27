# Usa uma imagem oficial do Node.js para build
FROM node:18-alpine AS build

# Cria e define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json (ou yarn.lock) para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install --include=dev


# Copia todo o restante do código para dentro do container
COPY . .

# Builda a aplicação React usando Vite
RUN npm run build

# Usa uma imagem leve do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos buildados para a pasta padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
