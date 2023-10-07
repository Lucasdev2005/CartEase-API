docker compose up -d --build db
docker compose up -d --build app-develop
docker exec -it cartease-api-app-develop-1 npx prisma migrate dev