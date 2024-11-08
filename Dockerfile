# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Elimina la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu archivo de configuración personalizado
COPY nginx.conf /etc/nginx/conf.d

COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Arranca Nginx cuando el contenedor inicie
CMD ["nginx", "-g", "daemon off;"]
