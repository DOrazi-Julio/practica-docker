# Usa una imagen base de Node.js
FROM node:20.11.1-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe) al directorio de trabajo
COPY . .

# Instala las dependencias del proyecto
RUN npm install

RUN npm run build

# Expóne el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "dist/app.js"]
