# Design System 

Librería de colecciones de componentes reutilizables basadas en Material UI basada en tecnologias React para proyectos NodeJS.

## Dependencias de Instalacion

Dependencias de instalacion:

- Node v16@latest
- Git
- Permisos de repositorio en @toctoc

## Clonar repositorio
En la carpeta de repositorios clonar el repositorio preferentemente con ssh

```
git clone git@github.com:Toctoc/design-system.git
                        ó
git clone https://github.com/Toctoc/design-system.git
```

## Instalacion
utilizando el gestor **NPM**, es necesario instalar las dependencias del proyecto. Preferentemente utilizar **NPM CI**, de lo contrario si es necesario testear compotamientos con nuevas dependencias o bumps **NPM I**

```
npm ci
npm run rollup
npm run sb
```

El proyecto localmente se levantara en **`localhost:3504`**, mientras que la ruta publica es **`ds.qatoctoc.com`**

## FAQ
Preguntas y errores conocidos
### Al compilar el proyecto, Error de React 17 vs 18 por doble dependencia.

 En el caso de compilar el proyecto y este no compile por dependencias cruzadas de React 17 es necesario sustituir las peerDependencies por dependencias estandar del proyecto.

 ```
 ...
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-refresh": "0.13.0"
  }
  ...
 ```

 a

 ```
dependencies:{
    ...
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-refresh": "0.13.0"
}
 ,"peerDependencies": {}
 ```

---
 forzando subida