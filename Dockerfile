FROM node:23-alpine AS dependencies
WORKDIR /apptemp
COPY package.json package-lock.json ./
RUN npm ci

FROM node:23-alpine AS build
WORKDIR /apptemp
COPY --from=dependencies node_modules package.json package-lock.json ./
COPY src/ index.html vite.config.js ./
RUN npm run build

FROM busybox:latest AS deploy
WORKDIR /apptemp
COPY --from=build /apptemp/dist /apptemp/dist

CMD ["/bin/sh", "-c", "mkdir -p /app/www/demo && cp -R /apptemp/dist/* /app/www/demo/"]