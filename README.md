# testPerezJordy
Script Base de datos 
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
