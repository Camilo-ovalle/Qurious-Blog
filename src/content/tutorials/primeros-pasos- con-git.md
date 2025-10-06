---
title: "Primeros pasos con Git y GitHub"
description: "Configuracion de git Y github en windows para desarrolladores"
pubDate: "Oct 02 2023"
heroImage: "/cover/git_usage/github-pages.webp"
---

Hola developer!👋. En este tutorial aprenderemos a crear un nuevo repositorio en GitHub, y a conectar Git bash con GitHub. Así que sin más preámbulos, comencemos!🚀

### ¿Qué veremos en este tutorial?

- **_¿Cómo crear un repositorio en GitHub?_**
- **_Cómo configurar git en Git bash_**
- **_Cómo crear un repositorio local y conectarlo con GitHub_**
- **_¿Qué sigue?_**

### ¿Cómo crear un repositorio en GitHub?

Bien, en primer lugar, debemos crear un repositorio en GitHub. Para esto, debemos ir a la página principal de GitHub, y hacer click en el botón **_New_**.

![git placeholder](/cover/git_usage/new-repo.webp)

Al dar clic en el botón **_New_**, nos aparecerá una ventana, en la que en primer lugar, se nos pedirá que ingresemos el nombre del repositorio. En este caso, le pondremos **_mi-primer-repositorio_**. Y después pondremos una breve descripción del repositorio (esto es opcional).

![git placeholder](/cover/git_usage/new-repo-name.webp)

En la siguiente sección podremos elegir si queremos que el repositorio sea público o privado. En este caso, lo dejaremos público. Por último, podemos elegir si queremos agregar un archivo **_README.md_**, agregar un archivo **_.gitignore_** y seleccionar una **_licencia_**.

En este caso, no seleccionaremos ninguna de estas opciones por el momento. Una vez hecho esto, hacemos click en el botón **_Create repository_**.

![git placeholder](/cover/git_usage/new-repo-public.webp)

Una vez hecho esto, ya tendremos nuestro primer repositorio en GitHub, y podremos ver la siguiente pantalla.

![git placeholder](/cover/git_usage/new-repo-created.webp)

¡Y listo! Ya tenemos nuestro primer repositorio en GitHub. Ahora, vamos a configurar Git bash para poder conectarlo con GitHub🚀.

### Cómo configurar git en Git bash

Bien, ahora que ya tenemos nuestro repositorio en GitHub, vamos a configurar Git bash para poder conectarlo con GitHub. Así que en primer lugar debemos decirle a git quién somos, y para esto, vamos a abrir Git bash, y vamos a escribir los siguientes comandos:

```bash
git config --global user.name "Tu nombre"

git config --global user.email "Tu email"
```

Si todo sale bien deberíamos ver algo como esto:

![git placeholder](/cover/git_usage/git-config1.webp)

### Cómo crear un repositorio local y conectarlo con GitHub.

Bien, ahora que ya tenemos configurado Git bash, vamos a crear un repositorio local y a conectarlo con GitHub. Para esto, vamos a crear una carpeta en nuestro escritorio, y vamos a abrir Git bash en esa carpeta. Para esto, en git bash, vamos a escribir los siguientes comandos:

```bash
cd Desktop

mkdir mi-primer-repositorio

cd mi-primer-repositorio
```

Si todo sale bien, deberíamos ver algo como esto:

![git placeholder](/cover/git_usage/git-config2.webp)
[Si quieres aprender más sobre los comandos de Linux haz clic aquí](/)

¡Pero espera!🤔. ¿No habíamos creado un repositorio en GitHub? ¿Por qué estamos creando otro repositorio?🤔. Bueno, la respuesta es simple. En este caso, vamos a crear un repositorio local, y luego lo vamos a conectar con GitHub. Para esto, vamos a escribir el siguiente comando:

```bash
git init
```

Una vez hecho esto, deberíamos ver algo como esto:

![git placeholder](/cover/git_usage/git-init.webp)

Bien, ¿qué fue lo que acabamos de hacer?🤔. Bueno, lo que hicimos fue crear un repositorio local. Pero, ¿qué es un repositorio local?🤔. Bueno, un repositorio local es un repositorio que se encuentra en nuestra computadora, y que no está conectado con GitHub. Por lo que, si realizamos cambios en el repositorio local, estos cambios no se verán reflejados en el repositorio de GitHub. Pero no te preocupes, ya que en el siguiente paso, vamos a conectar el repositorio local con GitHub🚀.

Bien, ahora que ya tenemos nuestro repositorio local, vamos a conectarlo con GitHub. Para esto, vamos a abrir GitHub, y vamos a copiar la URL del repositorio que acabamos de crear.

![git placeholder](/cover/git_usage/github-link.webp)

Para este caso la URL es la siguiente:

```bash
https://github.com/Camilo-ovalle/mi-primer-repositorio.git
```

Ahora, vamos a volver a Git bash, y vamos a escribir el siguiente comando:

```bash
git remote add origin https://github.com/Camilo-ovalle/mi-primer-repositorio.git
```

![git placeholder](/cover/git_usage/git-remote.webp)

Bien, en este caso hemos conectado nuestro repositorio de GitHub usando **_HTTP_**, pero por seguridad debemos usar **_SSH_**. Para esto, vamos a abrir GitHub, y vamos a copiar la dirección SSH del repositorio.

![git placeholder](/cover/git_usage/github-ssh.webp)

Para este caso la dirección SSH es la siguiente:

```bash
git@github.com:Camilo-ovalle/mi-primer-repositorio.git
```

Ahora, vamos a volver a Git bash, y vamos a escribir el siguiente comando:

```bash
git remote set-url origin git@github.com:Camilo-ovalle/mi-primer-repositorio.git
```

![git placeholder](/cover/git_usage/git-remote-ssh.webp)

¡Perfecto! Ya hemos conectado nuestro repositorio local con GitHub. Ahora solo debemos ingresar el siguiente comando para designar la rama principal del repositorio:

```bash
git branch -M main
```

### ¿Qué sigue?

¡Excelente! Ya hemos creado nuestro repositorio local, y lo hemos conectado con GitHub. Así que ya estamos listos para comenzar a trabajar en nuestro repositorio, pero esto lo veremos en el siguiente tutorial. Así que te invito a visitar nuestro tutorial sobre [trabajando con git](/tutorials/git-flow/), en donde aprenderás a trabajar con git, y a subir tus cambios a GitHub.

Nos vemos en el siguiente tutorial developer!🚀
