# wcopy

Copia una carpeta completa en windows con ruta origen a ruta destino

## Installation

Clonamos el [repositorio](https://github.com/D4ITON/wcopy.git)

```bash
git clone https://github.com/D4ITON/wcopy.git
```

Instalamos las dependencias de nodejs

```bash
npm install
```

Copiamos las configuraciones del archivo env.sample.js a env.js, copiamos las rutas que se nos muestran en

- PATH_ORIGEN
- PATH_DESTINO

Ejemplo:

```js
module.exports = {
  PATH_ORIGEN: "C:/proyecto/proyecto/dist",
  PATH_DESTINO: "C:/proyecto/dist",
};
```

## Usage

Ejecutamos su archivo llamado index.js

## nginx configuration

### for Linux:

```bash
server {
  listen 80;
  listen [::]:80;

  server_name _;

  root /var/www/cliente/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### for Windows:

```bash
server {
  listen 80;
  listen [::]:80;

  server_name _;

  root /var/www/cliente/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Contributing

Los pull request son bienvenidos. Se aceptan las ideas de mejora del archivo

## License

[MIT](https://choosealicense.com/licenses/mit/)
