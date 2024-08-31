FROM node:20.16-alpine3.20

RUN npm install -g typescript

RUN apk update && \ 
    apk add --no-cache git openjdk17-jre vim


EXPOSE 4321
WORKDIR /app

CMD ["sleep","infinity"]