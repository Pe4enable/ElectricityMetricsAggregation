FROM node:carbon
WORKDIR /usr/src/ema

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["node", "index"]
