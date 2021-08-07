# Docker Node js Example

Docker install

Windows
https://docs.docker.com/docker-for-windows/install/

MacOS
https://docs.docker.com/docker-for-mac/install/

Ubuntu
https://docs.docker.com/engine/install/ubuntu/

ทดสอบว่า docker ใช้งานได้
- $ docker version

หากสามารถใช้งานได้แล้ว จะแสดงversion ขึ้นมา

วิธีการใช้

SSH
- git@github.com:newzpanuwat/docker_node_example.git

HTTPS
- https://github.com/newzpanuwat/docker_node_example.git

ทดสอบการใช้งาน

Build Image

- $ docker build . -t <your username>/node-web-app

List images
- $ docker images
  
Run image
- $ docker run -p 49160:8080 -d <your username>/node-web-app
  
หากต้องการเข้าไปใน container นั้นๆ
- $ docker ps
  
Example

CONTAINER ID => d79d51d685ad      
IMAGE => <your username>/node-web-app:latest

- $ docker exec -it d79d51d685ad /bin/bash
  
การทดสอบว่าใช้งานได้
- $ curl -i localhost:49160

  
Docs
- https://docs.docker.com/

Docker commands
- https://docs.docker.com/engine/reference/commandline/docker/

Docker hub
- https://hub.docker.com/

Play with docker
- https://www.docker.com/play-with-docker

