# Stage 1: Build the Next.js static export
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies using clean install
RUN npm ci

# Copy all source code
COPY . .

# Build the application
# Based on next.config.mjs `output: "export"`, this generates static HTML/CSS/JS in the `out` directory
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built artifacts from the builder stage to Nginx's default public directory
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
