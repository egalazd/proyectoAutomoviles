**API Diplomado de Peliculas**
API desarrollada con **Node.js** y **PostgreSQL**, utilizando **Docker** y **Docker Compose**. Incluye autenticación con JWT y documentación interactiva con Swagger.

Primero, la API corre sobre DOCKER y NODE JS
debe estar instalado DOCKER y DOCKER COMPOSE (Segun sistema Operativo)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- Node.js (solo para ejecutar la carga inicial de datos)

instalar docker docker-compose node

Luego clonar repositorio GIT
crear un directorio

<pre><code># mkdir proyecto </code></pre>
<pre><code># cd proyecto </code></pre>
<pre><code># git clone https://github.com/egalazd/proyectoPeliculas.git </code></pre>

Luego correr la API levantando las imagenes con DOCKER (la imagen de postgresql y api)
<pre><code># cd proyectoPeliculas </code></pre>
<pre><code># docker compose up --build </code></pre>

Luego en otra consola, desde el SO local (Fuera del Docker), cargar la data con Knex
<pre><code># cd proyecto/proyectoPeliculas </code></pre>
<pre><code># node api/migrations/init-db.js </code></pre>


**API Funcionamiento**
Luego arrancara Swagger como localhost
http://localhost:3000/api-docs/

Y podremos realizar las pruebas de la API funcionando

**Usuarios**
Endpoints de autenticación y perfil

**POST /api/user/register**
El ejemplo lo tiene Swagger configurado, 
Registraremos un usuario, presionar el boton Try it Out
este es el ejemplo
<pre><code>
{
  "name": "Pedro",
  "email": "pedro@gmail.com",
  "password": "123456"
}
</code></pre>
resultado: usuario registrado correctamente

**POST /api/user/login**
El ejemplo lo tiene Swagger configurado
Inicia sesión y obtiene token JWT, presionar el boton Try it Out
este es el ejemplo
<pre><code>
{
  "email": "pedro@gmail.com",
  "password": "123456"
}
</code></pre>
resultado, obtener el token
copiar este en el boton Authorize de swagger en la parte superior

**GET /api/user/profile**
Obtiene perfil del usuario autenticado (Requiere TOKEN de usuario)
como ya el token esta autorizado, al presionar el boton Try it Out
resultado: datos del usuario

**GET /api/user/all**
Lista todos los usuarios, al presionar el boton Try it Out



**Películas**
Endpoints para gestionar películas (requiere Token)

**POST /api/movies**
Agrega una nueva película,  al presionar el boton Try it Out
<pre><code>
{
  "name": "Bastardos Sin gloria",
  "gender": "Accion",
  "release_date": "1972-03-24",
  "director": "Quentin Tarantino"
}
</code></pre>

**GET /api/movies**
Lista todas las películas,  al presionar el boton Try it Out

**PUT /api/movies/{id}**
Actualiza una película por ID
Ejemplo el numero 100 
<pre><code>
{
  "name": "Bastardos CON Gloria",
  "gender": "Accion",
  "release_date": "2025-06-29",
  "director": "Quentin Tarantino Sepulveda"
}
</code></pre>
//verificar que se actualizo la pelicula corriendo nuevamente GET /api/movies


**DELETE /api/movies/{id}**
Elimina una película por ID
Ejemplo el numero 100 
//verificar que se borro la pelicula corriendo nuevamente GET /api/movies



El proyecto contiene lo siguiente
<pre><code>
api/
    migrations # directorio migraciones
        data # directorio vacio
        seed-knex # directorio script de carga de json data inicial (importar data)
        seeds # directorio donde se almacenan los respaldos json de la bd al migrar (exportar data)
        export-movies.js # script de exportar modelo movie
        export-users.js # script de exportar modelo user
        init-db.js # script para importar data de json en la nueva bd (se ejecuta con node js en pasos descritos en README)
    node_modules # directorio generado por NODE js despendencias, no es parte de la API necesariamente
    src
        config # conectar a postgres y levantar swagger
        controllers # controladores de la api, se configura las funcionalidades POST,GET,PUT,DELETE
        middlewares # script de generación token
        models # modelo de la base de datos user y movie
        routes # se definen las rutas endpoints
        .env # se define las variables de entorno para fuera del docker
        .env.docker # se define las variables de entorno dentro de docker
        app.js # Configuración y carga de middlewares
        index.js # Punto de entrada principal de la API (servidor)
    Dockerfile                        # Instrucciones para construir la imagen de la API en Docker
    knexfile.js                      # Configuración para Knex (usado en migraciones y seeds)
    package.json                     # Dependencias y scripts del proyecto
    package-lock.json                # Lockfile de versiones exactas de dependencias
docker-compose.yml               # Orquestación de servicios Docker (API y PostgreSQL)
</code></pre>



Autor: Enrique Galaz Diaz