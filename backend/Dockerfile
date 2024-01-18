FROM node:20-alpine3.18

RUN npm install -g nodemon

WORKDIR /backendApp

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]