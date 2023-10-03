#buildar aplicação
FROM node:16.20-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

# Etapa 2: Criar a imagem final
FROM node:16.20-alpine

USER node

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000

#configurar permissões do usuário para somente leitura de arquivos
USER root
RUN adduser node root
RUN chmod -R 775 /tmp
RUN chown -R node:root /tmp
USER node

CMD ["npm", "run" , "start:prod"]