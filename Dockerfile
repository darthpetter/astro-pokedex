FROM node:20.16-alpine3.20

RUN npm install -g typescript

RUN apk update && \ 
    apk add --no-cache git vim

RUN apk add --no-cache openjdk17-jre
RUN java -version

EXPOSE 3000
WORKDIR /app

CMD ["sleep","infinity"]