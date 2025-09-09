FROM node:18 AS frontend

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm start"]