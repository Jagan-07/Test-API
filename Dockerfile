FROM node:alpine

WORKDIR /app-api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "films.js" ]
