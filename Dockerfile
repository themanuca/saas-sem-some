#Dockerfile generico


# Usar uma imagem leve do Node.js
FROM node:20-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar só os arquivos necessários para instalar as dependências (pra usar cache no build)
COPY package.json package-lock.json ./

# Instalar dependências (incluindo dev)
RUN npm install

# Copiar o restante do projeto
COPY . .

# Fazer o build do Next.js
RUN npm run build

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
