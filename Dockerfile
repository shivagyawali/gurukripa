# Stage 1: Build the frontend
FROM node:latest as frontend-builder

WORKDIR /usr/src/app/client

RUN rm -rf *

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

# Set NODE_OPTIONS environment variable to increase memory limit
ENV NODE_OPTIONS="--max-old-space-size=8096"

# Install backend dependencies
RUN npm install --only=production
RUN npm install sharp

# Build the backend
RUN npm run build

# Ensure public/uploads directory exists
RUN mkdir -p /usr/src/app/server/public/uploads

# Copy frontend build to the backend public directory
COPY --from=frontend-builder /usr/src/app/client/dist /var/www/gurukripanepal

# Copy uploaded files from the uploads directory to the backend public/uploads directory
COPY /etc/uploads /usr/src/app/server/public/uploads

# Expose port 1337 for the Strapi server
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "run", "start"]
