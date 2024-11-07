# Etapa de construcción
FROM node:14 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build --verbose
