## Joko SPA Starter Kit

Proyecto utilitario para empezar a construir una aplicaci�n web SPA (Single Page Application). 

Cuenta con funcionalidades y c�digo boilerplate ya fuera de la caja.

Como segundo objetivo este proyecto tiene la intenci�n de ser opinionado en cuanto a estructuraci�n y nombramiento de archivos para un proyecto JavaScript,
y tambi�n sobre nomenclaturas y patrones de c�digo que se deben seguir.

### Funcionalidades
  * P�gina template de login de usuarios 
  * M�dulo de autenticaci�n con JWT
  * Servidor Mock [Express](http://expressjs.com/) con API de prueba para autenticaci�n JWT
  * Twitter Bootstrap
  * jQuery
  * Backbone
  * Marionette
  * Validaci�n de formularios con [parsleyjs](http://parsleyjs.org/)
  * Manejador de errores de peticiones AJAX
  * Wrapper construido sobre [noty](http://ned.im/noty/#/about) para mensajes y notificaciones
  * Templates con [Handlebars](http://handlebarsjs.com/)

### Requerimientos

  * Mac OS X, Windows, or Linux
  * [Node.js](https://nodejs.org/) v4.4.4 o mayor
  * `npm` v3.8.9 o mayor ([npm](https://docs.npmjs.com/))
  
### Estructura de directorio

Antes de empezar, t�mese unos minutos para mirar como luce la estructura de directorio del proyecto:

```
.
+-- /public/                    # La carpeta para salida de archivos compilados
+-- /node_modules/              # Librer�as y utilitarios de terceros
+-- /app/                       # El c�digo de la aplicaci�n
�   +-- /assets/                # Im�genes y otros recursos de la aplicaci�n
�   +-- /js/                    # C�digo Marionette/Backbone de la aplicaci�n
    �   +-- /controllers/       # Controlador de rutas de Marionette
    �   +-- /lib/               # Librerias y utilitarios de Joko y adicionales que se vayan creando
	�   +-- /models/            # Modelos de Backbone
	�   +-- /routers/           # AppRouter de Marionette con las rutas de la aplicaci�n
	�   +-- /templates/         # Templates con notaci�n de Handlerbars
	�   +-- /views/             # Vistas de Backbone
	�   +-- app.js              # Aplicaci�n de Marionette con m�todos globales
	�   +-- config.js           # Configuraci�n global de aplicaci�n
	�   +-- errorhandler.js     # Manejador gen�rico de errores para peticiones AJAX
	�   +-- main.js             # Punto de entrada de nuestra aplicaci�n, ac� empieza todo :)
�   +-- /styles/                # CSS de la aplicaci�n
�   +-- /vendor/                # JS y CSS de terceros que queremos congelar para esta aplicaci�n
�   +-- index.html              # La p�gina HTML que carga la aplicaci�n que construimos en js/
+-- /server/                    # Servidor Express
+-- /tasks/                     # Scripts para automatizar la construcci�n de la aplicaci�n
�   +-- /assets.js              # Copia las im�genes al directorio public
�   +-- /browserify.js          # Convierte nuestros JS en algo ejecutable en un browser, los copia a un directorio de salida (public)
�   +-- /paths.js               # Utilitario que contiene las rutas de entrada y salida
�   +-- /serverMock.js          # Lanza un servidor de pruebas Express
�   +-- /styles.js              # Procesa los archivos de estilo CSS y los copia a un diretorio de salida (public)
+-- gulpfile.js                 # Script padre que ejecuta las tareas de tasks/
+-- package.json                # Lista de librer�as y utilidades de terceros
```

### Inicio R�pido

#### 1. Obtener la �ltima versi�n

Clone en su m�quina la �ltima versi�n de JSK (Joko Starter Kit):

```shell
$ git clone https://github.com/jokoframework/joko_spa_starter_kit.git app_ejemplo
$ cd app_ejemplo
```

#### 2. Ejecutar `npm install`

Esto va a instalar las dependencias en tiempo de ejecuci�n y las dependencias de desarrolladores 
listadas en el archivo [package.json](../package.json)


#### 3. Ejecutar `npm run start:mock`

Este comando va a construir la aplicaci�n, copiando los archivos de c�digo fuente (`/src`)
al directorio `/public` de salida. Tan pronto como esta construcci�n finalice va a lanzar
un servidor de pruebas Express y va a abrir el navegador por defecto en la ruta:

> [http://localhost:3000/](http://localhost:9000/) <br>

Se puede acceder a la aplicaci�n usando las credenciales de prueba:
```
email: clark@nomail.com
clave: 12345
```

### TODO

* Documentaci�n con recetas para agregar nuevas vistas de Backbone
* Documentaci�n con recetas para agregar librer�as y utilitarios de terceros
* Scripts para construir la aplicaci�n en modo desarrollo (sin servidor de pruebas)
* Scripts para construir la aplicaci�n en modo producci�n