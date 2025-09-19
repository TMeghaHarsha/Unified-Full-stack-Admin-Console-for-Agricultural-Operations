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

# Install serve globally
RUN npm install -g serve

# Serve the built folder
CMD ["serve", "-s", "dist", "-l", "3000"]
