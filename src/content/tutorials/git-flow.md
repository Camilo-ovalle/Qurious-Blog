---
title: "Trabajando con Git y GitHub"
description: "Trabajando con el flujo de trabajo de Git y GitHub"
pubDate: "Oct 24 2023"
heroImage: "/cover/git_flow/git-flow-cover.jpg"
---

Bienvenido de vuelta Developer, en este tutorial aprenderemos a trabajar con el flujo de trabajo de Git y GitHub, y para ello continuaremos usando repositorio de prueba que creamos en el tutorial anterior.

Pero primero, que veremos en este tutorial?

- **_¿Que es el flujo de trabajo basico de Git y GitHub?_**
- **_Realizando nuestro pimer primer cambio_**
- **_Realizando nuestro primer commit_**
- **_Realizando nuestro primer push_**
- **_¿Que sigue?_**

### ¿Que es el flujo de trabajo basico de Git y GitHub?

En primer lugar, debemos saber que es el flujo de trabajo de Git y GitHub. El flujo de trabajo básico de Git es un conjunto de pasos y operaciones que los desarrolladores siguen al utilizar Git, un sistema de control de versiones distribuido, para administrar el código fuente de un proyecto. El flujo de trabajo básico de Git generalmente implica los siguientes pasos:

- **_Realizar cambios_**
- **_Realizar commit_**
- **_Realizar push_**

Estos pasos constituyen el flujo de trabajo mas basico de Git y GitHub, y es el que usaremos en este tutorial.

### Realizando nuestro primer cambio

Bien, ahora que ya sabemos que es el flujo de trabajo de Git y GitHub, vamos a realizar nuestro primer cambio. Para esto, vamos a abrir nuestro repositorio en Visual Studio Code.

Para abrir Visual Studio Code, iremos a nuestra terminal de Git bash, y escribiremos el siguiente comando:

```bash
code .

```

Si todo sale bien, Visual Studio Code deberia abrirse, y deberiamos ver algo como esto:

![git placeholder](/cover/git_flow/vscode-open.png)

![git placeholder](/cover/git_flow/vscode-open2.png)

Bien, ahora que ya tenemos abierto nuestro repositorio en Visual Studio Code, vamos a crear un archivo llamado **_index.html_**. Para esto, en Visual Studio Code, vamos a hacer click en el boton **_New File_** o daremos click derecho en la carpeta **_mi-primer-repositorio_** y seleccionaremos la opcion **_New File_**.

![git placeholder](/cover/git_flow/vscode-new-file.png)

Una vez creado el archivo, vamos a escribir el siguiente codigo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primer cambio</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
  </body>
</html>
```

Una vez hecho esto, vamos a guardar el archivo, deberiamos ver algo como esto:

![git placeholder](/cover/git_flow/vscode-save.png)

Pero un momento, que es esto? Que es este icono de un circulo rojo con un 1? Bueno, esto es un indicador de que hemos realizado un cambio en nuestro repositorio, y que este cambio no ha sido guardado. Para guardar el cambio tenemos 2 opciones, podemos dirigirnos a nuestra terminal de Git bash para escribir nuestos comandos, o para mas comodidad, podemos abrir una terminal en Visual Studio Code. Para esto, en Visual Studio Code usando la combinación de teclas **_Ctrl + ñ_**.

Una vez abierta la terminal, seleccionaremos la opcion **_Git bash_** como se muestra en la siguiente imagen:

![git placeholder](/cover/git_flow/vscode-terminal.png)

Excelente! Ahora que ya tenemos abierta la terminal, vamos a digitamos el siguiente comando:

```bash
git add .
```

Este comando le dice a Git que queremos agregar todos los cambios que hemos realizado en nuestro repositorio. Si todo sale bien, deberiamos ver algo como esto:

![git placeholder](/cover/git_flow/git-add.png)
