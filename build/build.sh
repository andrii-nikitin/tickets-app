cd ..
cd tickets-api
npm i
docker build -t com.andriidnikitin.tickets/tickets-api .
cd ..
cd tickets-ui
npm i
docker build -t com.andriidnikitin.tickets/tickets-api .
cd ..
cd build
docker-compose up