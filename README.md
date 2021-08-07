# Docker Node js Example

Docker install

Windows
https://docs.docker.com/docker-for-windows/install/

MacOS
https://docs.docker.com/docker-for-mac/install/

Ubuntu
https://docs.docker.com/engine/install/ubuntu/


วิธีการใช้

SSH
- git@github.com:newzpanuwat/docker_node_example.git

HTTPS
- https://github.com/newzpanuwat/docker_node_example.git

ทำสอบการใช้งาน

build image

- $ docker build . -t <your username>/node-web-app
  
run image
- $ docker run -p 49160:8080 -d <your username>/node-web-app
  
หากต้องการเข้าไปใน container นั้นๆ
- $ docker ps
  
Example
ID            IMAGE                                COMMAND    ...   PORTS
d79d51d685ad  <your username>/node-web-app:latest  npm start  ...   49160->8080

- $ docker exec -it <container id> /bin/bash
  
ทดสอบว่าใช้งานได้
- $ curl -i localhost:49160

  
Docs
- https://docs.docker.com/

Docker commands
- https://docs.docker.com/engine/reference/commandline/docker/

Docker hub
- https://hub.docker.com/

Play with docker
- https://www.docker.com/play-with-docker

