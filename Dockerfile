# syntax=docker/dockerfile:1

FROM node:18-alpine as build
#ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:18-alpine

EXPOSE 4000
WORKDIR /app
RUN npm install serve
COPY --from=build /app/dist dist

CMD [ "npx", "serve", "-s", "dist", "-l", "4000" ]

