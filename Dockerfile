FROM openjdk:11-jre-slim
COPY build/libs/* app.jar
ENTRYPOINT ["java","-jar","/app.jar"]