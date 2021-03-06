# Docker Node js Example

Slide

https://docs.google.com/presentation/d/1tCAR9Ql3cCule95E_jVGqaKaTGufnd5XJni-TC3rQZ4/edit?usp=sharing

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

วิธีการใช้ (ไฟล์ตัวอย่าง)

SSH
- git clone git@github.com:newzpanuwat/docker_node_example.git

HTTPS
- git clone https://github.com/newzpanuwat/docker_node_example.git

ทดสอบการใช้งาน

Build Image

- $ docker build . -t node-web-app

List images
- $ docker images
  
Run image
- $ docker run -p 49160:8080 -d node-web-app
  
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

