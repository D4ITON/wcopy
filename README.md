# wcopy

Copia una carpeta completa en windows con ruta origen a ruta destino

## Instalación

Clonamos el [repositorio](https://github.com/D4ITON/wcopy.git)

```bash
git clone https://github.com/D4ITON/wcopy.git
```

Instalamos las dependencias de nodejs, este puede ser con npm o yarn

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

## Uso

Ejecutamos su archivo llamado index.js

## configuración de nginx

### Para Linux:

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

### Para Windows:

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

## License

[MIT](https://choosealicense.com/licenses/mit/)
