FROM node:alpine3.12

WORKDIR / aboutmeBot

COPY package*.json ./

RUN npm ci

COPY . . 

CMD [ "node", "index.js" ]