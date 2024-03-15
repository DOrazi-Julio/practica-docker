## Proyecto Angular y Node.js con Docker Compose

Este proyecto consta de una aplicación web simple desarrollada con Angular para el cliente y Node.js para el servidor. Además, utiliza Docker y Docker Compose para la gestión de contenedores.

### Estructura del Proyecto

- **back**: Directorio del proyecto backend.
  - Contiene el Dockerfile para crear la imagen del proyecto backend.
- **front**: Directorio del proyecto frontend.
  - Contiene el Dockerfile para crear la imagen del proyecto frontend.
- **operacion_compose**: Directorio que incluye los archivos necesarios para orquestar los proyectos mediante Docker Compose.
  - **docker-compose.yml**: Orquestador que descarga las imágenes desde Docker Hub.
  - **init.sql**: Archivo SQL para inicializar la base de datos con las tablas necesarias.
- **docker-compose-practice.yml**: Orquestador que construye las imágenes a partir de los archivos locales.

### Configuración de la Base de Datos

Para la conexión con la base de datos PostgreSQL, se debe utilizar la siguiente configuración:

```javascript
    user: 'dockerUser',
    host: 'db',
    database: 'dockerTestDB',
    password: '1234',
    port: 5432,
```

### Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
2. Accede al directorio del proyecto.
3. Ejecuta uno de los siguientes comandos dependiendo de tu preferencia:

- Para utilizar Docker Compose con imágenes desde Docker Hub:

```bash
docker-compose -f operacion_compose/docker-compose.yml up
```

- Para utilizar Docker Compose con imágenes construidas localmente:

```bash
docker-compose -f docker-compose-practice.yml up --build
```

### Acceso a la Aplicación

Una vez que los contenedores estén en ejecución, la aplicación estará disponible en los siguientes puertos:

- **Frontend (Angular)**: `http://localhost:8888`
- **Backend (Node.js)**: `http://localhost:3000`
- **Adminer**: `localhost:8080`

### Administración de la Base de Datos

Para administrar la base de datos, se proporciona el siguiente acceso:

- **Adminer**: Accede a `http://localhost:8080` en tu navegador y utiliza las siguientes credenciales:
  - **Servidor**: `db`
  - **Usuario**: `dockerUser`
  - **Contraseña**: `1234`
  - **Base de Datos**: `dockerTestDB`

### Notas Adicionales

- Asegúrate de tener Docker y Docker Compose instalados en tu sistema antes de ejecutar los comandos.
- Si es la primera vez que ejecutas el proyecto, la base de datos se inicializará automáticamente con las tablas necesarias utilizando el archivo `init.sql`.
- Si necesitas hacer ajustes en la configuración de la base de datos o en otros aspectos, modifica los archivos correspondientes en los directorios mencionados anteriormente.
