# Etapa 1 buildando aplicação
FROM node:16.20-alpine as builder
# defindo workdir para pasta app
WORKDIR /app
# copiando package.json para instalar dependenências
COPY package.json package-lock.json ./
RUN npm install

# copiando projeto para gerar o prisma e buildar aplicação
COPY . .
RUN npx prisma generate
RUN npm run build

# Etapa 2: Criar a imagem final
FROM node:16.20-alpine

# definindo usuário para node
USER node

# definindo workdir para pasta app
WORKDIR /app

# montando aplicação com dist Buildado e dependências instaladas
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/prisma ./prisma
EXPOSE 3000

# compilando build da aplicação
CMD ["npm", "run" , "start:prod"]