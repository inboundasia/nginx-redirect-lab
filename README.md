## Build Lab

docker build -t nginx-lab .

## Run Container

docker run --name nginx-lab-container -p 80:80 -d nginx-lab