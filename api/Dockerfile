FROM node:12
WORKDIR /usr/shared/api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4001
CMD ["node", "server.js"]