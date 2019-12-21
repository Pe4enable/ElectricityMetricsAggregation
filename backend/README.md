to start
node index

ENV=test node index

### Docker :

Build container:

    docker build --rm -t ema:latest .

Run container

    docker run --rm  -p 8080:8080 --name ema ema:latest

For run as demon add

    -d

Read logs from container

    docker logs ema