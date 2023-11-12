docker compose up -d --build db
docker compose up -d --build app-production
docker exec -it cartease-api-app-production npx prisma migrate deploy