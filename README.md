## Build Lab

docker build -t nginx-lab .

## Run Container

docker run --name nginx-lab-container -p 80:80 -d nginx-lab

## Modify /etc/hosts

127.0.0.1 abc.com
127.0.0.1 efg.com