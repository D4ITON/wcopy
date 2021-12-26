/**
 * wdeploy
 * Sirve para copiar los archivos desde una ruta a otra en windows
 * https://stackoverflow.com/a/64498004/9868383
 */
const fse = require("fs-extra");

const { PATH_ORIGEN } = require("./env");
const { PATH_DESTINO } = require("./env");

/**
 * Check that the values are defined in the .env file
 */
(function () {
  if (!PATH_ORIGEN) {
    throw Error("missing PATH_ORIGEN");
  }
  if (!PATH_DESTINO) {
    throw Error("missing PATH_DESTINO");
  }
})();

// To copy a folder or file
fse.copySync(PATH_ORIGEN, PATH_DESTINO, { overwrite: true }, function (err) {
  if (err) {
    console.error(err); // |___{ overwrite: true } // add if you want to replace existing folder or file with same name
  } else {
    console.log("Archivos copiados correctamente!");
  }
});
