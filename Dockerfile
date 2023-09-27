FROM node:16.20-alpine

WORKDIR /app/api

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]