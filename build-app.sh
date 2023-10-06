docker compose up -d --build db 
docker compose up -d --build app
docker exec -it cartease-api-app-1 npx prisma migrate deploy