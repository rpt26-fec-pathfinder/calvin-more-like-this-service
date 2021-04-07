FROM node:12.18.4

WORKDIR /moreLikeThis

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4022

CMD ["npm", "start"]