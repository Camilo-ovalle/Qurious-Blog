---
title: "Como desplegar un sitio web basico en Netlify"
description: "Aprendiendo a desplegar un sitio web basico en Netlify"
pubDate: "Oct 27 2023"
heroImage: "/cover/deploy/netlify-github.png"
---

Hola de nuevo Developer 👋, en este tutorial aprenderemos a desplegar un sitio web basico en Netlify, y con esto concluiremos con los tutoriales relacionados a Git y GitHub, y para ello necesitaremos tener una cuenta en Netlify y un repositorio en GitHub.

## ¿Que vere en este tutorial?

- **_¿Que es Netlify?_**
- **_Creando una cuenta en Netlify_**
- **_Creando un sitio web basico_**
- **_Desplegando nuestro sitio web en Netlify_**
- **_Alternativas a Netlify_**
- **_¿Que sigue?_**

### ¿Que es Netlify?

Netlify es una plataforma de alojamiento y automatización de sitios web que aprovecha el poder de la red de entrega de contenido (CDN) para proporcionar un rendimiento rápido y seguro, y con esto, Netlify nos permite desplegar sitios web estaticos de forma gratuita.

### Creando una cuenta en Netlify

Bien, ahora que ya sabemos que es Netlify, vamos a crear una cuenta en Netlify. Para esto, iremos a la pagina de [Netlify](https://www.netlify.com/) y daremos click en el boton **_Sign up_**.

![netlify placeholder](/cover/deploy/netlify-signup.png)

Una vez hecho esto, nos aparecera un formulario para crear nuestra cuenta, y lo unico que debemos hacer es llenar el formulario con nuestros datos y dar click en el boton **_Create account_**.

En este caso tendremos 2 opciones para crear nuestra cuenta, la primera es usando nuestra cuenta de GitHub, y la segunda es usando nuestro correo electronico, y en este caso usaremos GitHub, asi que daremos click en el boton **_Sing up with GitHub_**.

![netlify placeholder](/cover/deploy/netlify-signup2.png)

A continuacion, nos aparecera una ventana nueva donde nos pedira que autoricemos a Netlify a acceder a nuestra cuenta de GitHub, asi que daremos click en el boton **_Authorize netlify_**.

![netlify placeholder](/cover/deploy/netlify-signup3.png)

Una vez hecho esto, y si todo sale bien, nos aparecera un mensaje de bienvenida y nos pedira que ingresemos un nombre para nuestro equipo, asi que ingresaremos un nombre y daremos click en el boton **_Continue_**. Y ahi podremos ver nuestro dashboard de Netlify.

![netlify placeholder](/cover/deploy/netlify-signup4.png)

### Creando un sitio web basico

Bien, ahora que ya tenemos nuestra cuenta en Netlify, vamos a preparar nuestro sitio web basico. Para esto, vamos a usar nuestro repositorio de prueba que creamos en el tutorial anterior, y dentro de este repositorio, vamos a modificar el archivo **_index.html_** y vamos a escribir el siguiente codigo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Presentación de Alumno</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="container">
      <div class="alumno-info">
        <h1>Nombre del Alumno</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ab
          deleniti dolores doloribus illum, hic beatae error obcaecati
          consequatur unde dolore saepe veniam vero distinctio nulla, illo ad
          sequi reprehenderit ipsa, perferendis expedita quasi quis? Iure
          voluptas omnis incidunt ipsa nostrum, aliquid voluptatibus eos
          sapiente itaque, consequuntur quo nulla aperiam esse velit laudantium
          perspiciatis atque magni ipsum nam rerum fugiat. Atque minus enim
          quaerat exercitationem cupiditate accusamus sit et placeat fuga,
          repellendus iste tempora mollitia similique porro voluptates ipsam
          quasi, voluptate inventore provident dolores quibusdam aut. Placeat
          velit quisquam sunt deleniti vel nulla harum maxime est. Eos
          cupiditate dolores inventore.
        </p>
        <img
          src="https://media.tenor.com/VtFUW-durpoAAAAC/kururin-kuru-kuru.gif"
          alt=""
        />
      </div>
    </div>
  </body>
</html>
```

Ahora vamos a darle un poco de estilo a nuestro sitio web, asi que vamos a crear un archivo llamado **_main.css_** y vamos a escribir el siguiente codigo:

```css
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background-color: #111; /* Fondo en modo oscuro */
  color: #fff; /* Texto en color blanco */
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
}

.alumno-info {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

p {
  font-size: 1.2em;
}
```

Una vez hayamos acabado de escribir nuestro codigo, vamos a guardar los cambios y vamos a subir nuestro codigo a GitHub. Para esto, vamos a abrir nuestra terminal de Git bash, y vamos a digitar el siguiente comando:

```bash
- git add .

- git commit -m "Mi primer cambio"

- git push origin main
```

### Desplegando nuestro sitio web en Netlify

Excelente 👏, ahora que ya hemos subido nuestro codigo a GitHub, vamos a desplegar nuestro sitio web en Netlify. Para esto, vamos a ir a nuestro dashboard de Netlify, y vamos a dar click en el boton **_Add a new site_**, y seleccionaremos la opcion **_Import an existing project_**.

![netlify placeholder](/cover/deploy/netlify-add.png)

Despues de esto, nos aparecera una ventana nueva donde nos dara las opciones para importar nuestro proyecto, y en este caso seleccionaremos la opcion **_Deploy with GitHub_**.

![netlify placeholder](/cover/deploy/netlify-add2.png)

Una vez hecho esto, nos aparecera un menu de seleccion donde tendremos que seleccionar el repositorio donde tenemos nuestro proyecto, asi que seleccionaremos nuestro repositorio.

![netlify placeholder](/cover/deploy/netlify-add3.png)

Despues de esto, nos aparecera un menu de configuracion donde tendremos que configurar nuestro proyecto, asi que configuraremos nuestro proyecto colocando un slash **_"/"_** en el campo **_Base directory_** de la siguiente manera

![netlify placeholder](/cover/deploy/netlify-add4.png)

Una vez hecho esto, daremos click en el boton **_Deploy "nombre de tu proyecto"_** y esperaremos a que nuestro sitio web se despliegue.

Ahora podremos ver nuestro sitio web desplegado en Netlify dando click en el enlace que nos proporciona Netlify.

![netlify placeholder](/cover/deploy/netlify-add5.png)

Felicitaciones 👏, hemos desplegado nuestro sitio web basico en Netlify.

Ahora puedes compartir tu sitio web con tus amigos y familiares, y si quieres puedes seguir mejorando tu sitio web y desplegando tus cambios en Netlify.

### Alternativas

Ahora bien, Netlify no es la unica plataforma que nos permite desplegar sitios web estaticos de forma gratuita, tambien tenemos otras alternativas como [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/), [Firebase](https://firebase.google.com/), entre otras.

Pero te recomiendo que uses uses [Railway](https://railway.app/), ya que es una plataforma muy facil de usar y muy potente.

El proceso para desplegar un sitio web en Railway es muy similar al proceso que realizamos en Netlify, asi que te recomiendo que lo intentes por tu cuenta. Sin embargo aqui te dejo el paso a paso sobre como hacerlo.

1. Primero debes crear una cuenta en Railway.

![railway placeholder](/cover/deploy/railway-signup.png)

2. Despues de crear tu cuenta, debes crear un nuevo proyecto.

![railway placeholder](/cover/deploy/railway-add.png)

3. Una vez creado tu proyecto, debes seleccionar la opcion **_Deploy from GitHub repo_**.

![railway placeholder](/cover/deploy/railway-add2.png)

4. Despues de esto, debes seleccionar el repositorio donde tienes tu proyecto.

![railway placeholder](/cover/deploy/railway-add3.png)

5. Una vez hecho esto, debes seleccionar la opcion **_Deploy now_**.

![railway placeholder](/cover/deploy/railway-add4.png)

6. Despues de esto, debes esperar a que tu sitio web se despliegue.

![railway placeholder](/cover/deploy/railway-add5.png)

7. Una vez desplegado tu sitio web, iremos a la pestaña **_Settings_** y seleccionaremos la opcion **_Generate Domain_**.

![railway placeholder](/cover/deploy/railway-add6.png)

8. Despues de esto, debemos esperar a que se genere el dominio de nuestro sitio web y listo. Ya tenemos nuestro sitio web desplegado en Railway, y podremos ver nuestro sitio web dando click en el enlace que nos proporciona Railway.

![railway placeholder](/cover/deploy/railway-add7.png)

### ¿Que sigue?

Bien, ahora que ya hemos desplegado nuestro sitio web basico en Netlify, podemos seguir mejorando nuestro sitio web y desplegando nuestros cambios en Netlify o Railway, y quien sabe, tal vez en un futuro puedas desplegar tu sitio web en un servidor propio.

El limite lo pones tu, asi que sigue aprendiendo y sigue mejorando.

Te deseo mucho exito en tu camino como desarrollador, y nos vemos en el siguiente tutorial.
