# Primeros pasos

Para ejecutar el proyecto en su maquina:

- Revise las versiones de node (> v12) y npm (yo use las versiones: **v16.15.1** para **node** y **v8.11.0** para **npm**)
- Instale las dependencias del proyecto con el comando: `npm i`
- Para iniciar el servidor de desarrollo ejecute el comando: `npm run dev` e ingrese desde un navegador a la url `http://localhost:3000/`
- Para ejecutar las pruebas unitarias ejecute el comando: `npm run test`
- Para generar el reporte de cobertura de codigo ejecute el comando: `npm run coverage`, el reporte quedara en la ruta `laboratory\coverage\lcov-report`

## Uso de la Aplicación

Al ingresar a la url `http://localhost:3000/`

- Se va a visualizar un formulario `Tomar muestra de sangre`, una tabla `Filtrar muestras de sangre realizadas` y `4 fotos` de perros.

Cuando se diligencien los campos del formulario y se presione el botón `Validar muestra de sangre`, se agrega la muestra de sangre en una nueva fila de la tabla.
Si se ingresa un porcentaje invalido, por ejemplo 130, se mostrara un mensaje de error debajo del botón `Validar muestra de sangre`.

En la tabla se pueden filtrar las muestras de sangre diligenciando el campo `Filtrar por número de identificación`. No hay botón para limpiar los resultados de la busqueda, para visualizar todas las muestras de sangre, se debe ingresar una muestra nueva.

Las `4 fotos` de perros son aleatorias, para visualizar nuevas imagenes se tiene que recargar la pagina.

## Para tener en cuenta

- Revisar los archivos Disease.ts, DiseaseExample.ts, DiseaseValidatorService.ts, en estos se implemento la solucion al problema (se calcula el nivel de riesgo para un paciente).
- Se uso **React v17** porque la version 18 es muy reciente, por lo tanto, en la mayoria de entornos productivos se usa la v17
- Se uso **CSS** para estilizar la aplicacion pero sé trabajar con **SASS**
- Se uso **react-testing-library** para probar los componentes pero también sé trabajar con **Enzyme**
- En la carpeta `laboratory` se uso **arquitectura limpia**, buscando dividir la solucion en varias capas con responsabilidades bien definidas, por ejemplo:
capa domain para modelar el problema a solucionar, capa casos de uso donde se definen las reglas de negocio, capa controller como intermediario entre los casos de usos y la interface (vista)
- Se uso **redux** como gestor del estado de la aplicacion, mediante **redux-toolkit**, pero también sé usar redux sin **redux-toolkit**
- Se uso **axios** para el consumo de la api que retorna 4 fotos de perros.
- Solo se realizaron 3 pruebas, se probo un componente con dependencias: BloodTest.test.tsx, se probo un componente sin dependencias: Card.test.tsx y se probo una utilidad: ValidateInput.test.ts, por cuestiones de tiempo pero se demuestra capacidad para probar componentes y cualquier otro archivo que se use en la aplicación (con y sin dependencias).
