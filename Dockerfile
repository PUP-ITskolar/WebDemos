# Build stage
FROM node:23-alpine AS demo_build
WORKDIR /apptemp
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

CMD ["/bin/sh", "-c", "mkdir -p /app/www/demo && cp -R /apptemp/dist/* /app/www/demo/"]