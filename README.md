# 🌐 Formulario Web con API REST y PostgreSQL

Este proyecto es una aplicación web que permite registrar usuarios mediante un formulario HTML. Los datos son enviados a una API REST construida en Node.js y almacenados en una base de datos PostgreSQL.

## ⚙️ Requisitos

- Node.js y npm
- PostgreSQL
- Visual Studio Code
- Extensión Live Server (para el frontend)

## 🧑‍💻 Pasos para ejecutar el proyecto

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### Configurar la base de datos

En PostgreSQL, crea la base de datos y la tabla:
```bash
CREATE DATABASE usuariosdb;

\c usuariosdb

CREATE TABLE public.usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100)
);

```

### Ejecutar backend
En una terminal de Visual Studio Code, ejecutar los comandos:
```bash
cd backend
npm install
node index.js
```

Finalmente, ejecuta el frontend con Live Server
