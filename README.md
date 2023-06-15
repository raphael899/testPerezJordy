Script Base de datos
sql

-- Crear la base de datos
CREATE DATABASE eventos;

-- Usar la base de datos recién creada
USE eventos;

-- Crear la tabla "Eventos" dentro de la base de datos
CREATE TABLE Eventos (
    Id INT PRIMARY KEY IDENTITY(1,1),
    NombreInstitucion NVARCHAR(100) NOT NULL,
    DireccionInstitucion NVARCHAR(100) NOT NULL,
    NumeroAlumnos INT NOT NULL,
    HoraInicio DATETIME NOT NULL,
    ValorServicio DECIMAL(10, 2) NOT NULL
);

Test
El proyecto está compuesto por tres ramas: main, frontend y backend.

Ten en cuenta que la cadena de conexión del backend se encuentra en los archivos appsettings.json y appsettings.Development.json. Asegúrate de que la misma contenga las credenciales de tu base de datos.

Requisitos previos
Debes tener instalado en tu sistema el .NET Framework 4.7.2 o una versión superior.
Necesitarás Visual Studio 2019 o una versión posterior para compilar y ejecutar la aplicación.
Asegúrate de tener Node.js y npm instalados para el frontend.
Instalación y configuración
Backend
Clona el repositorio de Test desde GitHub.
Cambia a la rama "backend".
Abre el proyecto en Visual Studio.
Actualiza la cadena de conexión en los archivos appsettings.json y appsettings.Development.json con las credenciales de tu base de datos.
Compila el proyecto para restaurar las dependencias y generar el ejecutable.
Ejecuta la aplicación desde Visual Studio o desde el archivo ejecutable generado.
Frontend
Cambia a la rama "frontend".

Abre la carpeta del frontend en tu editor de código.

Abre una terminal en la carpeta del proyecto.

Ejecuta el siguiente comando para instalar las dependencias del frontend:

Copy code
npm install
Una vez finalizada la instalación, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

sql
Copy code
npm start
Accede a la aplicación desde tu navegador web en la dirección http://localhost:3000.

Uso
Abre la aplicación Test.
En la pantalla principal, podrás ver la lista de eventos existentes.
Haz clic en el botón "Agregar evento" para crear un nuevo evento.
Completa los campos requeridos, como el nombre de la institución, la dirección, el número de alumnos, la hora de inicio y el valor del servicio.
Haz clic en "Guardar" para crear el evento.
Para editar o eliminar un evento existente, haz clic en los botones correspondientes en la lista de eventos.
Disfruta de la gestión de eventos con Test.
Contribución
Si deseas contribuir a Test, sigue estos pasos:

Haz un fork de este repositorio.
Crea una nueva rama con la funcionalidad o mejora que deseas agregar.
Realiza los cambios en tu rama local.
Envía un pull request a este repositorio principal.
Agradecemos cualquier contribución que puedas hacer para mejorar Test.

Soporte
Si tienes alguna pregunta o problema, no dudes en abrir un problema en GitHub o ponerte en contacto con el equipo de desarrollo.

Licencia
Test está bajo la licencia MIT License.
