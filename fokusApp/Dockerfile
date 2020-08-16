FROM node:12
WORKDIR /usr/shared/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3011
CMD ["node", "server.js"]