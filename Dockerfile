FROM node:16.3.0-alpine

WORKDIR /app/api

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]