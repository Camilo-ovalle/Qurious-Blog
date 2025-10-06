---
title: "Instalación de Git bash en Windows "
description: "Instalación de Git bash en Windows & creacion de un repositorio en GitHub."
pubDate: "Sep 25 2023"
heroImage: "/Git-bash-cover.jpg"
---

Hola developer!👋. En este tutorial aprenderás a instalar Git bash en Windows, y a conectar Git bash con GitHub. Así que sin más preámbulos, comencemos!🚀

### ¿Qué veremos en este tutorial?

- **_¿Qué es Git bash?_**
- **_Instalación de Git bash en Windows_**
- **_Creando tu cuenta en GitHub_**
- **_Conectando Git bash con GitHub_**
- **_¡Que siga la fiesta!_**

### ¿Qué es Git bash?

Git bash es una aplicación que nos permite utilizar Git en Windows. Esta aplicación nos proporciona una manera muy sencilla de interactuar con los comandos de Git, ya que nos permite utilizar comandos de Linux en Windows. Además, nos provee de una terminal propia, por lo que no es necesario instalar una terminal adicional.

### Instalación de Git bash en Windows

Para instalar Git bash en Windows, lo primero que debemos hacer es descargar el instalador de Git bash. Para esto, debemos ir a la [página oficial de Git bash](https://git-scm.com/downloads), y descargar el instalador de Git bash. Una vez que se haya descargado el instalador, lo ejecutamos, y seguimos los pasos del instalador.

![git placeholder](/cover/git_tutorial/git-bash-site.png)

Durante la instalación, se nos presentarán varias opciones, en las que no nos concentraremos, ya que son un poco más avanzadas. Por lo que solo debemos seguir los pasos del instalador, y dejar las opciones por defecto.

![git placeholder](/cover/git_tutorial/bash-instalation.png)

![git placeholder](/cover/git_tutorial/git-bash-loading.png)

![git placeholder](/cover/git_tutorial/bash.png)

Una vez que se haya instalado Git bash, lo abrimos, y nos aparecerá una terminal, en la que podremos utilizar los comandos de Git.

![git placeholder](/cover/git_tutorial/bash-terminal.png)

## Creando tu cuenta en GitHub

Ahora bien, para poder crear un repositorio en GitHub, primero debemos crear una cuenta en GitHub. Para esto, debemos ir a la [página oficial de GitHub](https://github.com/) y creamos una cuenta.

![git placeholder](/cover/git_tutorial/github-account.png)

Perfecto, ahora que ya tenemos una cuenta en GitHub, podemos crear nuestro primer repositorio, así que ¡manos a la obra!🚀

## Conectando Git bash con GitHub

Para poder conectar Git bash con GitHub, primero debemos crear una llave SSH, que son un par de llaves que nos permiten conectarnos a GitHub de manera segura. Para esto, abrimos Git bash, y escribimos el siguiente comando:

```bash
ssh-keygen

```

Una vez hayamos dado enter, se nos pedirá que ingresemos una ruta en la que se guardará la llave SSH. Por lo que solo debemos dar enter, y se guardará en la ruta por defecto.

![git placeholder](/cover/git_tutorial/ssh-keygen.png)

Una vez des enter, se nos pedirá que ingresemos una contraseña, por lo que te recomendamos que ingreses una contraseña segura, y que la recuerdes, ya que la necesitarás para conectarte a GitHub. Pero en caso de que no quieras ingresar una contraseña, solo debes dar enter, y se creará la llave SSH sin contraseña.

![git placeholder](/cover/git_tutorial/ssh-keygen-password.png)

Se te solicitará que ingreses la contraseña nuevamente, por lo que solo debes ingresar la contraseña que ingresaste anteriormente, o dar enter en caso de que no hayas ingresado una contraseña.

¡Excelente!👌. Si todo ha salido bien, verás un mensaje como el siguiente:

![git placeholder](/cover/git_tutorial/ssh-keygen-success.png)

Muy bien, ya tenemos nuestra llave SSH, ahora debemos copiarla, para esto, debemos abrir el archivo que se encuentra en la ruta que ingresamos anteriormente, y copiar el contenido del archivo.

Para saber la ubicación de la llave SSH que acabamos de crear, podemos ver uno de los mensajes que nos aparecieron anteriormente, en el que se nos indica la ruta en la que se guardó la llave SSH.

![git placeholder](/cover/git_tutorial/ssh-keygen-file.png)

Ahora, ya que tenemos la ruta de la llave SSH, podemos ver que esta se guardo en una carpeta llamada **_.ssh_**, y podremos navegar hacia ella utilizando el comando "cd"

```bash
cd .ssh && ls
```

Una vez que estemos en la carpeta **_.ssh_**, podemos ver que hay dos archivos, uno con la extensión **_.pub_**, y otro sin extensión. El archivo con la extensión **_.pub_** es el que debemos abrir, y copiar su contenido.

Para ello usaremos el siguiente comando

```bash
cat id_rsa.pub
```

Una vez que hayamos dado enter, se nos mostrará el contenido del archivo, por lo que solo debemos copiarlo.

![git placeholder](/cover/git_tutorial/ssh-keygen-cat.png)

¡Excelente!👌. Ya tenemos nuestra llave SSH, ahora debemos ir a GitHub, y agregar nuestra llave SSH. Para esto, debemos ir a la configuración de nuestra cuenta, y seleccionar la opción "SSH and GPG keys".

![git placeholder](/cover/git_tutorial/github-settings.png)

![git placeholder](/cover/git_tutorial/github-ssh.png)

Al ingresar a la opción "SSH and GPG keys", podremos ver 2 opciones, una para agregar una llave SSH, y otra para agregar una llave GPG. En este caso, solo nos concentraremos en la opción "SSH keys", por lo que debemos presionar el botón "New SSH key".

![git placeholder](/cover/git_tutorial/github-ssh-new.png)

Una vez que hayamos presionado el botón "New SSH key", se nos abrirá una ventana, en la que debemos ingresar un título para nuestra llave SSH así que asegúrate de ingresar un título que te permita identificar la llave SSH, y en el campo "Key", debemos pegar el contenido de la llave SSH que copiamos anteriormente, y presionaremos el botón "Add SSH key".

![git placeholder](/cover/git_tutorial/github-ssh-new-key.png)

Si todo salió bien, veremos un mensaje como el siguiente:

![git placeholder](/cover/git_tutorial/github-ssh-success.png)

### ¡Que siga la fiesta!

¡Excelente! 😁, hemos enlazado correctamente Git bash con GitHub🔐 .

Ahora estamos listos para crear nuestro primer repositorio en GitHub. Pero esto lo veremos en el siguiente tutorial, así que ¡no te lo pierdas!🚀
