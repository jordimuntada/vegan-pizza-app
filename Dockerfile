# Dockerfile
FROM nginx:alpine

# Copy custom static files to nginx's default public directory
COPY public /usr/share/nginx/html

# Expose port 80
EXPOSE 80
