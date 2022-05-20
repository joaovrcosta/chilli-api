docker build --pull --rm -f "Dockerfile" -t backend:latest .

docker run -it backend:latest 

docker run -p 3334:3334 -it backend:latest

Cria arquivo de migration:
npm run typeorm migration:create src/db/migrations/nome-da-migration

#Cria migration<<
yarn typeorm migration:run --dataSource src/dataSource.ts 

#Reverte a migration<<
yarn typeorm migration:revert --dataSource src/dataSource.ts 
