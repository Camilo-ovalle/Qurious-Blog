---
title: "Como desplegar un sitio web basico en Netlify"
description: "Aprendiendo a desplegar un sitio web basico en Netlify"
pubDate: "Oct 27 2023"
heroImage: "/cover/deploy/netlify-github.png"
---

Hola de nuevo Developer 👋, en este tutorial aprenderemos a desplegar un sitio web basico en Netlify, y con esto concluiremos con los tutoriales relacionados a Git y GitHub, y para ello necesitaremos tener una cuenta en Netlify y un repositorio en GitHub.

## ¿Qué veré en este tutorial?

- **_¿Qué es Netlify?_**
- **_Creando una cuenta en Netlify_**
- **_Creando un sitio web básico_**
- **_Desplegando nuestro sitio web en Netlify_**
- **_Alternativas a Netlify_**
- **_¿Qué sigue?_**

### ¿Qué es Netlify?

Netlify es una plataforma de alojamiento y automatización de sitios web que aprovecha el poder de la red de entrega de contenido (CDN) para proporcionar un rendimiento rápido y seguro, y con esto, Netlify nos permite desplegar sitios web estáticos de forma gratuita.

### Creando una cuenta en Netlify

Bien, ahora que ya sabemos qué es Netlify, vamos a crear una cuenta en Netlify. Para esto, iremos a la página de [Netlify](https://www.netlify.com/) y daremos clic en el botón **_Sign up_**.

![netlify placeholder](/cover/deploy/netlify-signup.png)

Una vez hecho esto, nos aparecerá un formulario para crear nuestra cuenta, y lo único que debemos hacer es llenar el formulario con nuestros datos y dar clic en el botón **_Create account_**.

En este caso tendremos 2 opciones para crear nuestra cuenta, la primera es usando nuestra cuenta de GitHub, y la segunda es usando nuestro correo electrónico, y en este caso usaremos GitHub, así que daremos clic en el botón **_Sign up with GitHub_**.

![netlify placeholder](/cover/deploy/netlify-signup2.png)

A continuación, nos aparecerá una ventana nueva donde nos pedirá que autoricemos a Netlify a acceder a nuestra cuenta de GitHub, así que daremos clic en el botón **_Authorize netlify_**.

![netlify placeholder](/cover/deploy/netlify-signup3.png)

Una vez hecho esto, y si todo sale bien, nos aparecerá un mensaje de bienvenida y nos pedirá que ingresemos un nombre para nuestro equipo, así que ingresaremos un nombre y daremos clic en el botón **_Continue_**. Y ahí podremos ver nuestro dashboard de Netlify.

![netlify placeholder](/cover/deploy/netlify-signup4.png)

### Creando un sitio web básico

Bien, ahora que ya tenemos nuestra cuenta en Netlify, vamos a preparar nuestro sitio web básico. Para esto, vamos a usar nuestro repositorio de prueba que creamos en el tutorial anterior, y dentro de este repositorio, vamos a modificar el archivo **_index.html_** y vamos a escribir el siguiente código:

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

Ahora vamos a darle un poco de estilo a nuestro sitio web, así que vamos a crear un archivo llamado **_main.css_** y vamos a escribir el siguiente código:

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

Una vez hayamos acabado de escribir nuestro código, vamos a guardar los cambios y vamos a subir nuestro código a GitHub. Para esto, vamos a abrir nuestra terminal de Git bash, y vamos a digitar el siguiente comando:

```bash
- git add .

- git commit -m "Mi primer cambio"

- git push origin main
```

### Desplegando nuestro sitio web en Netlify

¡Excelente! 👏, ahora que ya hemos subido nuestro código a GitHub, vamos a desplegar nuestro sitio web en Netlify. Para esto, vamos a ir a nuestro dashboard de Netlify, y vamos a dar clic en el botón **_Add a new site_**, y seleccionaremos la opción **_Import an existing project_**.

![netlify placeholder](/cover/deploy/netlify-add.png)

Después de esto, nos aparecerá una ventana nueva donde nos dará las opciones para importar nuestro proyecto, y en este caso seleccionaremos la opción **_Deploy with GitHub_**.

![netlify placeholder](/cover/deploy/netlify-add2.png)

Una vez hecho esto, nos aparecerá un menú de selección donde tendremos que seleccionar el repositorio donde tenemos nuestro proyecto, así que seleccionaremos nuestro repositorio.

![netlify placeholder](/cover/deploy/netlify-add3.png)

Después de esto, nos aparecerá un menú de configuración donde tendremos que configurar nuestro proyecto, así que configuraremos nuestro proyecto colocando un slash **_"/"_** en el campo **_Base directory_** de la siguiente manera

![netlify placeholder](/cover/deploy/netlify-add4.png)

Una vez hecho esto, daremos clic en el botón **_Deploy "nombre de tu proyecto"_** y esperaremos a que nuestro sitio web se despliegue.

Ahora podremos ver nuestro sitio web desplegado en Netlify dando clic en el enlace que nos proporciona Netlify.

![netlify placeholder](/cover/deploy/netlify-add5.png)

¡Felicitaciones! 👏, hemos desplegado nuestro sitio web básico en Netlify.

Ahora puedes compartir tu sitio web con tus amigos y familiares, y si quieres puedes seguir mejorando tu sitio web y desplegando tus cambios en Netlify.

### Alternativas

Ahora bien, Netlify no es la única plataforma que nos permite desplegar sitios web estáticos de forma gratuita, también tenemos otras alternativas como [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/), [Firebase](https://firebase.google.com/), entre otras.

Pero te recomiendo que uses [Railway](https://railway.app/), ya que es una plataforma muy fácil de usar y muy potente.

El proceso para desplegar un sitio web en Railway es muy similar al proceso que realizamos en Netlify, así que te recomiendo que lo intentes por tu cuenta. Sin embargo aquí te dejo el paso a paso sobre cómo hacerlo.

1. Primero debes crear una cuenta en Railway.

![railway placeholder](/cover/deploy/railway-signup.png)

2. Después de crear tu cuenta, debes crear un nuevo proyecto.

![railway placeholder](/cover/deploy/railway-add.png)

3. Una vez creado tu proyecto, debes seleccionar la opción **_Deploy from GitHub repo_**.

![railway placeholder](/cover/deploy/railway-add2.png)

4. Después de esto, debes seleccionar el repositorio donde tienes tu proyecto.

![railway placeholder](/cover/deploy/railway-add3.png)

5. Una vez hecho esto, debes seleccionar la opción **_Deploy now_**.

![railway placeholder](/cover/deploy/railway-add4.png)

6. Después de esto, debes esperar a que tu sitio web se despliegue.

![railway placeholder](/cover/deploy/railway-add5.png)

7. Una vez desplegado tu sitio web, iremos a la pestaña **_Settings_** y seleccionaremos la opción **_Generate Domain_**.

![railway placeholder](/cover/deploy/railway-add6.png)

8. Después de esto, debemos esperar a que se genere el dominio de nuestro sitio web y listo. Ya tenemos nuestro sitio web desplegado en Railway, y podremos ver nuestro sitio web dando clic en el enlace que nos proporciona Railway.

![railway placeholder](/cover/deploy/railway-add7.png)

### ¿Qué sigue?

Bien, ahora que ya hemos desplegado nuestro sitio web básico en Netlify, podemos seguir mejorando nuestro sitio web y desplegando nuestros cambios en Netlify o Railway, y quién sabe, tal vez en un futuro puedas desplegar tu sitio web en un servidor propio.

El límite lo pones tú, así que sigue aprendiendo y sigue mejorando.

Te deseo mucho éxito en tu camino como desarrollador, y nos vemos en el siguiente tutorial.
