<a name="readme-top"></a>

# Sm2_Aplicacion ionic/laravel

Este proyecto es una aplicación desarrollada con **Ionic y laravel** que sirve como una herramienta para la gestión de roles, usuarios y perfiles. Proporciona una interfaz moderna 
y responsiva para interactuar con los datos.

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Características](#características)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Estructura del Proyecto](#estructura-del-proyecto)

---

## Descripción

Esta aplicación permite a los usuarios realizar las siguientes acciones:
- Visualizar roles y usuarios registrados.
- Consultar y editar información de los perfiles.
- Manejar el estado (activo/inactivo) de los usuarios.

El proyecto está diseñado con un enfoque responsivo y estético, aprovechando las características de **Ionic Framework**.

---

## Características

- **Interfaz moderna**: Diseño minimalista y estilizado.
- **Responsividad**: Optimizado para distintos tamaños de pantalla.
- **CRUD de Usuarios**: Crear, leer, actualizar y eliminar usuarios.
- **Gestión de Estados**: Cambiar el estado de un usuario (activo/inactivo).
- **Modularidad**: Estructura clara para facilitar el mantenimiento y la extensión.

---

## Requisitos Previos

Antes de instalar y ejecutar este proyecto, asegúrate de tener lo siguiente instalado:

- **Node.js** (versión 16 o superior).
- **Ionic CLI**: Puedes instalarlo con el comando:
  ```bash
  npm install -g @ionic/cli
  
## Instalacion
git clone https://github.com/JesusMina/Sm2_2024.git
cd front
npm install
ionic serve

## Uso
1. Accede a la aplicación a través del navegador en http://localhost:8100.
2. Utiliza las opciones de navegación para:
Gestionar Roles.
Ver, agregar o editar usuarios.
Consultar y actualizar perfiles.

## Estructura del proyecto
src/
├── app/                      # Módulos principales de la aplicación
│   ├── home/                 # Página de inicio
│   ├── usuarios/             # Gestión de usuarios
│   ├── roles/                # Gestión de roles
│   └── perfil/               # Perfil de usuario
├── assets/                   # Recursos estáticos (imágenes, íconos, etc.)
├── services/                 # Servicios para manejar datos
├── theme/                    # Configuración de temas y estilos globales
└── environments/             # Configuración de entornos (desarrollo/producción)




