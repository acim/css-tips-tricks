FROM mhart/alpine-node:14 AS build

WORKDIR /app
COPY . .

RUN npm ci && npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/public /usr/share/nginx/html
