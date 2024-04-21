cd ..
cd tickets-api-js
npm i
docker build -t com.andriidnikitin.tickets/tickets-api-js .
cd ..
cd build-js
pwd
open http://localhost:3000
docker-compose up