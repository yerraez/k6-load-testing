# Pruebas de carga utilizando la herramienta k6

Este directorio esta conformado por los siguientes archivos:
- load_testing.js, script para pruebas de carga para la página https://petstore.octoperf.com/actions/Catalog.action
- conclusiones.txt, conclusiones de la ejecución de la prueba realizada. 
- README.md, archivo readme con instrucciones para la ejecución del script y visualización de resultados.

# Prerrequisitos
Antes de ejecutar el script de load testing, asegúrate de tener instaladas las siguientes herramientas:

- Node.js: Versión 16.15.1


- k6: Versión 0.52.0

Para verificar que tienes las versiones correctas puedes usar los siguientes comandos: 

```bash
# Verificar la versión de Node.js
node -v

# Verificar la versión de k6
k6 version
```

# Instrucciones de Ejecución
1. Creación del Script de Prueba
Se ha creado un script en JavaScript para realizar la prueba de carga, denominado load_testing.js. Este script simula usuarios realizando solicitudes a un endpoint para medir el rendimiento de la página web https://petstore.octoperf.com/actions/Catalog.action y ciertas interacciones dentro de ella.

2. Ejecución del Script y Generación de Reporte en HTML
Para ejecutar el script de prueba y generar un reporte en HTML con el resumen de la prueba, utiliza el siguiente comando:

```bash
# Este comando ejecutará la prueba de carga localmente y creará un archivo report.html en el directorio actual, mismo que  puedes abrir con cualquier navegador para visualizar el resumen de la prueba.
k6 run load_testing.js --summary-export=report.html
```

3. Visualización de Resultados en la Nube con k6 y Grafana
Para visualizar los resultados de la prueba en tiempo real con gráficos interactivos en k6 Cloud y Grafana, sigue estos pasos:

    3.1. Iniciar Sesión en k6 Cloud
    Primero, asegúrate de tener una cuenta en k6 Cloud. Luego, inicia sesión con tus credenciales:

    ```bash
    # Ingresa tus credenciales de k6 Cloud cuando se te solicite.
    k6 login cloud
    ```

    3.2. Ejecutar la Prueba en k6 Cloud
    Después de iniciar sesión, ejecuta el siguiente comando para correr la prueba en k6 Cloud:

    ```bash
    # Este comando subirá tu script a k6 Cloud y comenzará a ejecutar la prueba. Se pueden monitorear los gráficos y resultados en tiempo real. 
    k6 cloud load_testing.js
    ```

# Importante 
Asegúrate de que tu script load_testing.js está configurado correctamente y en el directorio desde el cual estás ejecutando estos comandos.
Para la generación de los gráficos, asegúrate de tener acceso a una cuenta de k6 Cloud y estar familiarizado con la interfaz de Grafana para visualizar los resultados detallados.


