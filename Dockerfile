# Stage 1: Build the frontend
FROM node:latest as frontend-builder

WORKDIR /usr/src/app/client

RUN rm -rf *

WORKDIR /usr/src/app/client

# Copy frontend files
COPY ./client .

# Install frontend dependencies
RUN npm install

# Build the frontend
RUN npm run build

# Stage 2: Build the backend
FROM node:latest as backend-builder

WORKDIR /usr/src/app/server

# Copy backend files
COPY ./server .

# Copy environment configuration from server folder to server folder .env file
COPY ./server/.env.example .env

WORKDIR /usr/src/app/server

# Set NODE_OPTIONS environment variable to increase memory limit
ENV NODE_OPTIONS="--max-old-space-size=8096"

# Install backend dependencies
RUN npm install --only=production
RUN npm install sharp

# Build the backend
RUN npm run build

RUN rm -rf /var/www/gurukripanepal

COPY --from=frontend-builder /usr/src/app/client/dist /var/www/gurukripanepal

# Expose port 1337 for the Strapi server
EXPOSE 1337

# Start the Strapi application with pm2
CMD ["npm", "run", "start"]
