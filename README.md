# Aplicación web con Angular 6
Proyecto diseñado para mi TFM. Consiste en una cliente web desarrollado en **Typescript**
utilizando el framework **[Angular 6](https://angular.io/docs)**. La aplicación
consumirá los datos expuestos por la API desarrollada en el proyecto [carlosgmr/tfm-api-express](https://github.com/carlosgmr/tfm-api-express).

El seed del proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Instalación y despliegue
Para instalar el proyecto hay que seguir los siguientes pasos:

1. Instalar Node.js y npm: `sudo apt-get install -y nodejs`.
   Si el despliegue se realiza en un sistema operativo o distribución Linux distinta, consultar [esta página](https://nodejs.org/es/download/package-manager/).
2. Instalar globalmente Angular Cli: `npm install -g @angular/cli`
3. Clonar o descargar proyecto desde GitHub: `git clone https://github.com/carlosgmr/tfm-app-angular.git app-angular`
4. Entrar en la carpeta del proyecto: `cd app-angular`
5. Instalar dependencias del proyecto: `npm install`
6. Abrir el archivo `src/environments/environment.prod.ts`
7. Modicar la clave `api > url` y poner la URL donde se encuentra desplegada la [API Express](https://github.com/carlosgmr/tfm-api-express). **Importante** Si API se encuentra en el mismo equipo, no utilizar `localhost` o `127.0.0.1`, sino la IP que tiene el equipo en la red local (utilizad ifconfig para averiguarla).
8. Generar contenido de despliegue: `ng build --prod --build-optimizer`
9. Construir la imagen de Docker: `docker build -t carlosgmr/app-angular .`
   Tener en cuenta que hay que estar dentro de la carpeta del proyecto.
10. Construir contenedor Docker con la imagen anterior y ejecutarlo: `docker run -p 8973:80 --detach --memory 1g --name app-angular carlosgmr/app-angular`
11. La aplicación se encuentra accesible desde `http://localhost:8973`