FROM node:21.2.0 as builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
