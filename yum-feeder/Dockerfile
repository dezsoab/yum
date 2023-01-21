FROM openjdk:17
EXPOSE 8080
ADD target/yum-pet-feeder.jar yum-pet-feeder.jar
ENTRYPOINT ["sudo","java","-jar","/yum-pet-feeder.jar"]
