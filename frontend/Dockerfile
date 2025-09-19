FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Remove any cached favicon that might exist in build
RUN rm -f public/favicon.ico

RUN npm run build

# Install serve globally
RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "3000"]
