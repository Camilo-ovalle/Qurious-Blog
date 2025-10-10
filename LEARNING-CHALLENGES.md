# 🎯 RETOS DE APRENDIZAJE - DEV GATE

**Propósito**: Asegurar que estás APRENDIENDO, no solo copiando código.

---

## 📚 Cómo usar este sistema

### Antes de implementar una nueva feature:

1. **Leo te da un RETO** (micro desafío de 5-15 min)
2. **Tú intentas resolverlo** (sin mi ayuda)
3. **Comparamos soluciones** (aprendes del proceso)
4. **Luego implementamos juntos** (con entendimiento real)

### Reglas:

- ✅ Puedes buscar en Google/documentación
- ✅ Puedes revisar código existente del proyecto
- ✅ Puedes usar ChatGPT/StackOverflow
- ❌ NO me preguntes la respuesta directamente
- ❌ NO copies sin entender

---

## 🏆 RETOS POR NIVEL

### 🟢 NIVEL 1: FUNDAMENTOS (Completados)

#### ✅ Reto 1.1: Configuración básica
**Desafío**: Sin ayuda, explica qué hace cada línea de este código:
```javascript
export const SITE_TITLE = 'DEV🚀Gate';
export const SITE_DESCRIPTION = 'Tutoriales de desarrollo web';
```

**Tu respuesta**: _[Escribe aquí]_

**Validación**: ¿Para qué sirven estas constantes en el proyecto?

---

#### ✅ Reto 1.2: Import vs Export
**Desafío**: ¿Cuál es la diferencia entre estos dos?
```javascript
// Opción A
import { Image } from "astro:assets";

// Opción B
import Image from "astro:assets";
```

**Tu respuesta**: _[Escribe aquí]_

**Validación**: ¿Cuándo usas cada uno?

---

#### ✅ Reto 1.3: Props en Astro
**Desafío**: Lee este código y explica qué hace:
```astro
---
const { title, description } = Astro.props;
---

<h1>{title}</h1>
<p>{description}</p>
```

**Tu respuesta**: _[Escribe aquí]_

**Validación**: ¿Cómo le pasarías datos a este componente?

---

### 🟡 NIVEL 2: COMPONENTES (Próximos retos)

#### 🎯 Reto 2.1: Crear tu primer componente
**Desafío**: Crea un componente `<DifficultyBadge>` que:
- Reciba una prop `level` ("beginner", "intermediate", "advanced")
- Muestre un badge con color diferente por nivel
- Beginner = verde, Intermediate = amarillo, Advanced = rojo

**Tiempo estimado**: 15 minutos

**Pasos sugeridos**:
1. Crea el archivo `src/components/DifficultyBadge.astro`
2. Define las props
3. Crea el HTML
4. Agrega estilos condicionales
5. Prueba el componente

**Validación**:
- [ ] El componente existe
- [ ] Acepta la prop `level`
- [ ] Muestra colores diferentes
- [ ] Funciona en producción

**Pista (solo si te atascas)**: Mira cómo `FormattedDate.astro` usa props.

---

#### 🎯 Reto 2.2: Componente con datos dinámicos
**Desafío**: Crea un componente `<TagList>` que:
- Reciba un array de tags
- Muestre cada tag como un link a `/tags/[tag]`
- Aplique estilos básicos

**Ejemplo de uso**:
```astro
<TagList tags={["git", "github", "tutorial"]} />
```

**Resultado esperado**:
```html
<div class="tags">
  <a href="/tags/git">git</a>
  <a href="/tags/github">github</a>
  <a href="/tags/tutorial">tutorial</a>
</div>
```

**Validación**:
- [ ] Funciona con arrays vacíos sin romper
- [ ] Links funcionan correctamente
- [ ] Se ve bien visualmente

---

#### 🎯 Reto 2.3: PostCard reutilizable
**Desafío**: Crea `<PostCard>` que reciba un post y muestre:
- Imagen (con Image de Astro)
- Título
- Descripción
- Tags
- Tiempo de lectura
- Badge de dificultad

**Tiempo estimado**: 30 minutos

**Pre-requisitos**: Haber completado Reto 2.1 y 2.2

**Validación**:
- [ ] Usa tus componentes DifficultyBadge y TagList
- [ ] Funciona tanto en blog como tutorials
- [ ] Es responsive
- [ ] Código está limpio y formateado

---

### 🔴 NIVEL 3: RUTAS DINÁMICAS (Avanzado)

#### 🎯 Reto 3.1: Entender getStaticPaths()
**Desafío**: Sin implementar nada, responde:

1. ¿Qué hace `getStaticPaths()` en Astro?
2. ¿Cuándo se ejecuta? (build time o runtime)
3. ¿Para qué sirve el objeto que retorna?

**Recurso**: https://docs.astro.build/en/reference/api-reference/#getstaticpaths

**Tu respuesta**: _[Escribe aquí]_

---

#### 🎯 Reto 3.2: Crear página dinámica por tag
**Desafío**: Crea `/src/pages/tags/[tag].astro` que:
- Genere una página por cada tag único
- Muestre todos los posts con ese tag
- Tenga un título "Posts sobre: [tag]"

**Pasos**:
1. Crear el archivo `[tag].astro`
2. Implementar `getStaticPaths()` para obtener todos los tags
3. Filtrar posts por tag
4. Renderizar lista de posts

**Tiempo estimado**: 45 minutos

**Validación**:
- [ ] `/tags/git` muestra solo posts con tag "git"
- [ ] `/tags/javascript` funciona correctamente
- [ ] El build no tiene errores
- [ ] Funciona en desarrollo Y producción

**Pista**: Revisa `[...slug].astro` para ver un ejemplo similar.

---

#### 🎯 Reto 3.3: Página índice de tags
**Desafío**: Crea `/src/pages/tags/index.astro` que:
- Muestre TODOS los tags disponibles
- Por cada tag, muestre cuántos posts tiene
- Los tags sean clickeables a `/tags/[tag]`

**Ejemplo visual**:
```
📚 Todos los Tags

git (5 posts)
github (3 posts)
javascript (2 posts)
...
```

**Tiempo estimado**: 20 minutos

**Validación**:
- [ ] Muestra todos los tags únicos
- [ ] Cuenta correctamente los posts por tag
- [ ] Links funcionan
- [ ] Sin duplicados

---

### 🟣 NIVEL 4: CONCEPTOS AVANZADOS

#### 🎯 Reto 4.1: Filtrado con draft
**Desafío**: Modifica `/src/pages/blog/index.astro` para:
- En PRODUCCIÓN: solo mostrar posts con `draft: false`
- En DESARROLLO: mostrar todos los posts

**Código a implementar**:
```typescript
const posts = await getCollection('blog', ({ data }) => {
  // Tu código aquí
});
```

**Pista**: Usa `import.meta.env.PROD`

**Validación**:
- [ ] En dev (`npm run dev`) ves todos los posts
- [ ] En build (`npm run build`) solo ves publicados
- [ ] No rompes nada existente

---

#### 🎯 Reto 4.2: Posts relacionados
**Desafío**: En `BlogPost.astro`, muestra 3 posts relacionados basados en:
- Comparten al menos 1 tag con el post actual
- No incluir el post actual
- Máximo 3 posts

**Lógica sugerida**:
1. Obtener tags del post actual
2. Buscar otros posts que tengan algún tag en común
3. Excluir el post actual
4. Limitar a 3

**Tiempo estimado**: 30 minutos

**Validación**:
- [ ] Muestra posts realmente relacionados
- [ ] No muestra el post actual
- [ ] Funciona si no hay posts relacionados
- [ ] Performance aceptable

---

## 📝 FORMATO DE ENTREGA DE RETOS

Cuando completes un reto, documenta:

### Plantilla:
```markdown
## Reto [número]: [nombre]
**Fecha**: [fecha]
**Tiempo tomado**: [minutos]

### Mi solución:
[código o explicación]

### Qué aprendí:
1. [aprendizaje 1]
2. [aprendizaje 2]

### Dificultades encontradas:
- [problema 1 y cómo lo resolviste]

### Pregunta para Claude:
- [si tienes dudas específicas]
```

---

## 🎓 RECURSOS DE ESTUDIO

### Antes de cada reto, revisa:

**Para Componentes**:
- Docs de Astro: https://docs.astro.build/en/basics/astro-components/
- Ejemplo en el proyecto: `src/components/Header.astro`

**Para Rutas Dinámicas**:
- Docs: https://docs.astro.build/en/guides/routing/#dynamic-routes
- Ejemplo: `src/pages/blog/[...slug].astro`

**Para Content Collections**:
- Docs: https://docs.astro.build/en/guides/content-collections/
- Ejemplo: `src/content/config.ts`

**Para Props y Tipos**:
- TypeScript en Astro: https://docs.astro.build/en/guides/typescript/
- Ejemplo: `src/layouts/BlogPost.astro`

---

## 🏅 SISTEMA DE PROGRESO

### Niveles de maestría:

**🟢 Aprendiz** (0-3 retos completados)
- Entiendes lo básico
- Necesitas referencias constantes
- Copias con modificaciones

**🟡 Practicante** (4-7 retos completados)
- Creas componentes simples solo
- Entiendes el flujo de datos
- Buscas documentación cuando la necesitas

**🔴 Competente** (8-10 retos completados)
- Creas features completas solo
- Entiendes arquitectura del proyecto
- Solo necesitas ayuda en casos complejos

**🟣 Experto** (11+ retos completados)
- Propones mejoras al código
- Detectas problemas antes de que ocurran
- Puedes enseñar a otros

### Tu nivel actual: 🟢 **Aprendiz** (0 retos)

---

## 💪 TIPS PARA APRENDER EFECTIVAMENTE

### 1. **Método Feynman** (Explica como si enseñaras)
Después de cada reto, explica en voz alta (o por escrito) cómo funciona tu solución como si le enseñaras a alguien que no sabe programar.

### 2. **Debugging intencional**
Rompe tu código a propósito:
- Quita un import → ¿Qué error da?
- Cambia un tipo → ¿Qué pasa?
- Borra una prop → ¿Cómo se comporta?

**Aprendes más arreglando errores que copiando código perfecto.**

### 3. **Documentación primero**
Antes de preguntarme:
1. Lee la documentación oficial
2. Busca en el proyecto código similar
3. Prueba tu hipótesis
4. SI AÚN no funciona, pregunta

### 4. **Micro-retos diarios**
Cada día, antes de empezar:
- Crea un componente pequeño desde cero
- Explica un concepto en tus propias palabras
- Refactoriza algo que hiciste ayer

### 5. **Build > Tutorial**
En lugar de ver tutoriales de 2 horas:
- Toma UN concepto (ej: props)
- Busca 5 minutos de info
- Implementa 30 minutos
- Repite

---

## 🚨 SEÑALES DE QUE NO ESTÁS APRENDIENDO

❌ **Síntomas de "solo copiar"**:
- No puedes explicar qué hace el código
- Si cambio una línea, todo se rompe y no sabes por qué
- Necesitas ayuda para cambios mínimos
- Olvidas lo que hiciste ayer

✅ **Síntomas de "verdadero aprendizaje"**:
- Puedes recrear features similares solo
- Entiendes los errores y sabes cómo arreglarlos
- Propones soluciones alternativas
- Recuerdas conceptos días después

---

## 📅 PLAN DE RETOS PARA ESTA SEMANA

### Día 1 (Próxima sesión):
- [ ] Reto 2.1: DifficultyBadge (15 min)
- [ ] Reto 2.2: TagList (20 min)
- [ ] Implementación real con mi ayuda (45 min)

### Día 2:
- [ ] Reto 2.3: PostCard (30 min)
- [ ] Integrar en blog/index.astro (30 min)
- [ ] Implementación real (30 min)

### Día 3:
- [ ] Reto 3.1: Entender getStaticPaths (leer 20 min)
- [ ] Reto 3.2: Página dinámica por tag (45 min)
- [ ] Reto 3.3: Índice de tags (20 min)

### Día 4:
- [ ] Reto 4.1: Filtrado con draft (15 min)
- [ ] Reto 4.2: Posts relacionados (30 min)
- [ ] Refactoring y mejoras (variable)

---

## 🎯 CONTRATO DE APRENDIZAJE

**Yo (Camilo) me comprometo a:**
1. ✅ Intentar CADA reto antes de pedir ayuda
2. ✅ Documentar lo que aprendo
3. ✅ No copiar sin entender
4. ✅ Hacer preguntas específicas (no "ayúdame con todo")
5. ✅ Dedicar mínimo 15 min a cada reto

**Claude se compromete a:**
1. ✅ Dar retos progresivos (ni muy fáciles, ni imposibles)
2. ✅ Explicar conceptos cuando sea necesario
3. ✅ Validar que entiendes antes de avanzar
4. ✅ Celebrar tus logros
5. ✅ Ser honesto si algo no está claro

---

## 🔄 CICLO DE APRENDIZAJE

```
1. RETO (intenta solo - 15-30 min)
     ↓
2. INTENTO (implementa tu solución)
     ↓
3. VALIDACIÓN (verificas que funcione)
     ↓
4. COMPARACIÓN (comparas con mi solución)
     ↓
5. COMPRENSIÓN (entiendes las diferencias)
     ↓
6. APLICACIÓN (úsalo en el proyecto real)
```

**Repetir hasta dominar.**

---

## 📊 TRACKING DE PROGRESO

### Retos completados: 0 / 12

- [ ] Reto 2.1: DifficultyBadge
- [ ] Reto 2.2: TagList
- [ ] Reto 2.3: PostCard
- [ ] Reto 3.1: Entender getStaticPaths
- [ ] Reto 3.2: Página dinámica por tag
- [ ] Reto 3.3: Índice de tags
- [ ] Reto 4.1: Filtrado con draft
- [ ] Reto 4.2: Posts relacionados

### Nivel actual: 🟢 Aprendiz (0%)

**Próximo nivel**: 🟡 Practicante (necesitas 4 retos)

---

## 💬 CÓMO PEDIR AYUDA EFECTIVAMENTE

### ❌ Pregunta vaga:
"No funciona, ayuda"

### ✅ Pregunta específica:
"Estoy en el Reto 2.1. Mi componente recibe la prop `level` pero no muestra colores diferentes.
Mi código:
```astro
[código aquí]
```
Error: [error específico]
Intenté: [lo que intentaste]
¿Qué me falta?"

---

## 🎁 RECOMPENSAS

Cuando completes:
- **3 retos**: Entenderás componentes en Astro
- **6 retos**: Podrás crear features completas solo
- **9 retos**: Estarás listo para proyectos propios
- **12 retos**: Tendrás una base sólida para cualquier framework

---

## 🚀 EMPIEZA AHORA

**Tu primer reto para la próxima sesión**:

### 🎯 Reto 2.1: DifficultyBadge
**ANTES de pedirme ayuda**:
1. Crea `src/components/DifficultyBadge.astro`
2. Implementa la lógica de colores
3. Pruébalo en una página
4. Documenta qué aprendiste

**Tiempo límite**: 20 minutos máximo

**Si te atascas**: Está bien, pero intenta primero. El error es parte del aprendizaje.

---

**¿Listo para aprender de verdad?** 🔥

**Próxima actualización**: Después de completar tu primer reto
