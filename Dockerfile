FROM nginx:1.15-alpine

LABEL maintainer="Carlos Molina <cmolinaronceros@gmail.com>"

### Copiamos configuración Nginx ###
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

### Copiamos proyecto a contenedor ###
RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/tfm-app-angular /usr/share/nginx/html

### Copiamos AdminLte ###
RUN cd /usr/share/nginx/html && \
    mkdir -p node_modules/admin-lte/bower_components && \
    mkdir -p node_modules/admin-lte/dist
COPY ./node_modules/admin-lte/bower_components /usr/share/nginx/html/node_modules/admin-lte/bower_components
COPY ./node_modules/admin-lte/dist /usr/share/nginx/html/node_modules/admin-lte/dist

### Arrancamos nginx ###
CMD ["nginx", "-g", "daemon off;"]
