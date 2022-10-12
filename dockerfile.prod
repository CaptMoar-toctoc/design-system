FROM node:lts-alpine3.16 as BUILD

WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build-storybook

FROM nginx:stable-alpine
COPY --from=BUILD /app/storybook-static /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]