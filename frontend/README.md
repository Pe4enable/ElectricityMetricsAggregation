# Electricity Metric Agregator frontend
### Run :
Install all dependencies 

    npm install

Run app

    yarn start

### Docker :

Build container:

    docker build --rm -t ema:latest .

Run container

    docker run --rm  -p 3000:3000 --name ema ema:latest

For run as demon add

    -d

Read logs from container

    docker logs ema
