# Docker image for springboot file run
# VERSION 0.0.1
# Author:
# 基础镜像使用java
#FROM openjdk:8
# 作者
#MAINTAINER laihx
# VOLUME 指定了临时文件目录为/tmp。
# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp
#VOLUME /tmp
# 将jar包添加到容器中并更名为xx.jar
#ADD weixin.tuisong-1.0-SNAPSHOT.jar weixin.tuisong-1.0-SNAPSHOT.jar
# 运行jar包
#RUN bash -c 'touch /weixin.tuisong-1.0-SNAPSHOT.jar'
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/weixin.tuisong-1.0-SNAPSHOT.jar"]

FROM openjdk:8
VOLUME /tmp
COPY weixin.tuisong-2.0-SNAPSHOT.jar /test2.jar
RUN bash -c 'touch /test2.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/test2.jar"]