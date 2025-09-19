# Frontend Dockerfile
FROM node:20

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build app
RUN npm run build

# Start dev server (override in docker-compose if needed)
CMD ["npm", "run", "start"]
