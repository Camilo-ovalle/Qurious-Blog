---
title: "Trabajando con Git y GitHub"
description: "Aprende el flujo de trabajo básico de Git y GitHub: realiza tu primer cambio, commit y push a un repositorio remoto paso a paso."
pubDate: "Oct 24 2023"
heroImage: "/cover/git_flow/git-flow-cover.jpg"
heroImageAlt: "Diagrama ilustrando el flujo de trabajo de Git con comandos básicos"
tags: ["git", "github", "control-de-versiones", "workflow", "tutorial"]
category: "tutorial"
difficulty: "beginner"
estimatedReadTime: 15
---

Bienvenido de vuelta Developer, en este tutorial aprenderemos a trabajar con el flujo de trabajo de Git y GitHub, y para ello continuaremos usando repositorio de prueba que creamos en el tutorial anterior.

Pero primero, ¿qué veremos en este tutorial?

- **_¿Qué es el flujo de trabajo básico de Git y GitHub?_**
- **_Realizando nuestro primer cambio_**
- **_Realizando nuestro primer commit_**
- **_Realizando nuestro primer push_**
- **_¿Qué sigue?_**

### ¿Qué es el flujo de trabajo básico de Git y GitHub?

En primer lugar, debemos saber que es el flujo de trabajo de Git y GitHub. El flujo de trabajo básico de Git es un conjunto de pasos y operaciones que los desarrolladores siguen al utilizar Git, un sistema de control de versiones distribuido, para administrar el código fuente de un proyecto. El flujo de trabajo básico de Git generalmente implica los siguientes pasos:

- **_Realizar cambios_**
- **_Realizar commit_**
- **_Realizar push_**

Estos pasos constituyen el flujo de trabajo más básico de Git y GitHub, y es el que usaremos en este tutorial.

### Realizando nuestro primer cambio

Bien, ahora que ya sabemos que es el flujo de trabajo de Git y GitHub, vamos a realizar nuestro primer cambio. Para esto, vamos a abrir nuestro repositorio en Visual Studio Code.

Para abrir Visual Studio Code, iremos a nuestra terminal de Git bash, y escribiremos el siguiente comando:

```bash
code .

```

Si todo sale bien, Visual Studio Code debería abrirse, y deberíamos ver algo como esto:

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

Una vez hecho esto, vamos a guardar el archivo, deberíamos ver algo como esto:

![git placeholder](/cover/git_flow/vscode-save.png)

Pero un momento, ¿qué es esto? ¿Qué es este icono de un círculo rojo con un 1? Bueno, esto es un indicador de que hemos realizado un cambio en nuestro repositorio, y que este cambio no ha sido guardado. Para guardar el cambio tenemos 2 opciones, podemos dirigirnos a nuestra terminal de Git bash para escribir nuestros comandos, o para más comodidad, podemos abrir una terminal en Visual Studio Code. Para esto, en Visual Studio Code usando la combinación de teclas **_Ctrl + ñ_**.

Una vez abierta la terminal, seleccionaremos la opcion **_Git bash_** como se muestra en la siguiente imagen:

![git placeholder](/cover/git_flow/vscode-terminal.png)

¡Excelente! Ahora que ya tenemos abierta la terminal, vamos a digitar el siguiente comando:

```bash
git add .
```

Este comando le dice a Git que queremos agregar todos los cambios que hemos realizado en nuestro repositorio. Si todo sale bien, deberíamos ver algo como esto:

![git placeholder](/cover/git_flow/git-add.png)

Bien, ahora que ya hemos agregado nuestros cambios, es hora de realizar nuestro primer commit. Para esto, vamos a digitar el siguiente comando:

```bash
git commit -m "Mi primer cambio"
```

Este comando le dice a Git que queremos realizar un commit con el mensaje **_"Mi primer cambio"_**. Si todo sale bien, deberíamos ver algo como esto:

![git placeholder](/cover/git_flow/git-commit.png)

![git placeholder](/cover/git_flow/git-commit2.png)

Lo que acabamos de hacer es guardar nuestro cambio en el repositorio local, pero ¿qué es el repositorio local? Bueno, el repositorio local es el repositorio que tenemos en nuestra computadora, y el repositorio remoto es el repositorio que tenemos en GitHub. Ahora que ya hemos guardado nuestro cambio en el repositorio local, es hora de guardar nuestro cambio en el repositorio remoto. Para esto, vamos a digitar el siguiente comando:

```bash
git push origin main
```

Este comando le dice a Git que queremos realizar un push de nuestro cambio al repositorio remoto. Si todo sale bien, deberíamos ver algo como esto:

![git placeholder](/cover/git_flow/git-push.png)

![git placeholder](/cover/git_flow/git-push2.png)

¡Excelente! Ahora que ya hemos guardado nuestro cambio en el repositorio remoto, vamos a ir a GitHub para verificar que nuestro cambio se haya guardado correctamente. Para esto, vamos a ir a nuestro repositorio en GitHub, y deberíamos ver algo como esto:

![git placeholder](/cover/git_flow/github-repo.png)

¡Excelente! Nuestro cambio se ha guardado correctamente en el repositorio remoto. Ahora que ya hemos guardado nuestro cambio en el repositorio remoto, vamos a realizar otro cambio, pero esta vez, vamos a realizarlo directamente en GitHub. Para esto, vamos a ir a nuestro repositorio en GitHub, y vamos a hacer clic en el archivo **_index.html_**.

![git placeholder](/cover/git_flow/github-index.png)

Una vez hecho esto, vamos a hacer clic en el botón **_Edit this file_**.

![git placeholder](/cover/git_flow/github-edit.png)

Una vez hecho esto, vamos a escribir el siguiente codigo:

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
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim, sed
      aspernatur ipsam vitae asperiores veritatis labore et harum debitis quasi
      rerum a? Asperiores ipsum earum provident iusto, laboriosam blanditiis.
    </p>
  </body>
</html>
```

Una vez hecho esto, vamos a hacer clic en el botón **_Commit changes_**.

![git placeholder](/cover/git_flow/github-commit.png)

Ahora debemos escribir un mensaje para nuestro commit, y una vez hecho esto, vamos a hacer clic en el botón **_Commit changes_**.

![git placeholder](/cover/git_flow/github-commit2.png)

¡Excelente! Ahora que ya hemos guardado nuestro cambio en el repositorio remoto, vamos a ir a Visual Studio Code para verificar que nuestro cambio se haya guardado correctamente. Para esto, vamos a ir a nuestra terminal de Git bash, y vamos a digitar el siguiente comando:

```bash
git pull origin main
```

Este comando le dice a Git que queremos realizar un pull de nuestro cambio al repositorio local. Si todo sale bien, deberíamos ver algo como esto:

![git placeholder](/cover/git_flow/git-pull.png)

Ya que realizamos un pull de nuestro cambio al repositorio local, veremos que nuestro archivo **_index.html_** ha sido actualizado con el cambio que realizamos en GitHub.

Felicidades, acabas de realizar tu primer cambio, tu primer commit y tu primer push. Ahora que ya sabes como realizar cambios, commits y push, es hora de que tu practiques. Para esto, te invito a que realices los siguientes ejercicios:

- **_Realiza un cambio en el archivo index.html_**
- **_Realiza un commit con el mensaje "Mi segundo cambio"_**
- **_Realiza un push de tu cambio al repositorio remoto_**

Con esto podras afianzar lo que has aprendido en este tutorial.

### ¿Qué sigue?

¡Excelente! En este tutorial aprendimos a trabajar con el flujo de trabajo de Git y GitHub, y para ello realizamos nuestro primer cambio, nuestro primer commit y nuestro primer push. Con esto seremos capaces de trabajar con el flujo de trabajo de Git y GitHub, y podremos trabajar en equipo con otros desarrolladores.

En el próximo tutorial aprenderemos cómo utilizar lo que hemos aprendido para subir una página web al hosting gratuito **_Netlify_**.

Si te gustó este tutorial, no olvides compartirlo con tus amigos y seguirme en mis redes sociales para que no te pierdas de nada.

**_Nos vemos en el próximo tutorial_** 👋👋👋
