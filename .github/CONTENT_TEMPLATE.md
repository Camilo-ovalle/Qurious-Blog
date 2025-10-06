# Content Template for Blog Posts

Use this template for all new posts to maintain consistency and quality.

## Filename Convention
`YYYY-MM-DD-short-slug.md`

Example: `2025-10-05-git-merge-conflicts.md`

---

## Post Template

```markdown
---
title: "[Clear, specific title that solves a problem]"
description: "Concise description (150-160 chars for SEO)"
pubDate: 2025-XX-XX
updatedDate: # optional, only if updating
heroImage: "/images/xxx.jpg"
heroImageAlt: "Descriptive alt text"
tags: ["tag1", "tag2", "tag3"] # max 5 tags
category: "tutorial" # or "blog", "guide"
difficulty: "beginner" # or "intermediate", "advanced"
estimatedReadTime: 10 # in minutes
author: "Camilo Ovalle"
draft: false # set to true while writing
---

## 🎯 Qué aprenderás

En este tutorial aprenderás:
- Punto específico 1
- Punto específico 2
- Punto específico 3

**Al final podrás**: [resultado específico y medible]

---

## 💡 El Problema

[Describe el problema REAL que enfrentaste o que es común]

**Ejemplo del mundo real**:
[Una situación concreta donde este problema apareció]

---

## ✅ Prerequisitos

Antes de comenzar, asegúrate de tener:
- [ ] Conocimiento de X
- [ ] Herramienta Y instalada ([link a instalación])
- [ ] [Otro prerequisito]

**Tiempo estimado**: X minutos

---

## 🚀 Paso a Paso

### Paso 1: [Título descriptivo]

[Explicación de QUÉ vamos a hacer y POR QUÉ]

```language
// Código con comentarios explicativos
function example() {
  // Explicación de esta línea
  const result = doSomething();
  return result;
}
```

**💡 Explicación**: [Por qué funciona esto, qué está pasando]

**📸 Screenshot**: [Si ayuda, agrega captura de pantalla]

---

### Paso 2: [Título descriptivo]

[Continuar con el siguiente paso...]

---

## ⚠️ Errores Comunes

### Error #1: [Descripción del error]

**Síntoma**: [Cómo se manifiesta]

```bash
# Ejemplo del error
Error message here...
```

**Causa**: [Por qué pasa este error]

**Solución**:
```bash
# Comando o código para solucionarlo
fix command here
```

---

### Error #2: [Siguiente error común]

[Repetir estructura...]

---

## 🏋️ Ejercicio Práctico

Ahora que entiendes la teoría, practica con este ejercicio:

**Objetivo**: [Qué deben lograr]

**Instrucciones**:
1. Paso 1
2. Paso 2
3. Paso 3

**Solución**: [Link a repositorio con solución, o acordeón con la solución]

<details>
<summary>Ver solución</summary>

```language
// Código de la solución
```

</details>

---

## 🎨 Mejores Prácticas

- ✅ **Haz esto**: [Recomendación 1]
- ✅ **Haz esto**: [Recomendación 2]
- ❌ **Evita esto**: [Anti-patrón 1]
- ❌ **Evita esto**: [Anti-patrón 2]

---

## 🔗 Recursos Adicionales

Para profundizar en este tema:

- 📖 [Documentación oficial](link)
- 📝 [Artículo relacionado 1](link)
- 🎥 [Video tutorial](link)
- 💻 [Repositorio de ejemplo](link)

---

## 🎓 Conclusión

En este tutorial aprendimos:
- ✅ Punto 1
- ✅ Punto 2
- ✅ Punto 3

**Próximos pasos**:
- [ ] [Sugerencia de qué aprender después]
- [ ] [Link a tutorial relacionado]

---

## 💬 Preguntas Frecuentes

<details>
<summary><strong>¿Pregunta común 1?</strong></summary>

Respuesta clara y concisa.

</details>

<details>
<summary><strong>¿Pregunta común 2?</strong></summary>

Respuesta clara y concisa.

</details>

---

## 🤝 Contribuye

¿Encontraste un error o tienes una sugerencia? [Abre un issue en GitHub](link)

---

## 📬 Newsletter

Si te gustó este contenido, suscríbete a mi newsletter para recibir más tutoriales como este.

[Componente de newsletter signup]

---

**Última actualización**: YYYY-MM-DD
**Etiquetas**: #tag1 #tag2 #tag3
```

---

## Quality Checklist

Before publishing, verify:

### Content
- [ ] Title is clear and specific (solves a problem)
- [ ] Description is 150-160 characters
- [ ] All code examples are tested and working
- [ ] Screenshots are clear and annotated if needed
- [ ] No spelling/grammar errors
- [ ] Reading time is accurate
- [ ] Post flows logically from problem → solution → practice

### Technical
- [ ] All code blocks have language specified
- [ ] Code is syntax highlighted
- [ ] Links are not broken (use link checker)
- [ ] Images are optimized (<200KB each)
- [ ] All images have alt text
- [ ] Tags are lowercase and consistent
- [ ] Frontmatter is complete

### SEO
- [ ] Meta description is compelling
- [ ] Title has keywords but reads naturally
- [ ] Hero image is relevant
- [ ] Internal links to other posts
- [ ] External links open in new tab
- [ ] Canonical URL is correct

### Accessibility
- [ ] Headings are semantic (h2, h3, h4 in order)
- [ ] Code contrast is readable
- [ ] No color-only information
- [ ] Lists are properly formatted
- [ ] Tables have headers if used

---

## Post Ideas Generator

Stuck on what to write? Use this framework:

### Format 1: Problem → Solution
"Cómo resolver [problema específico] en [tecnología]"

### Format 2: Comparison
"[Tecnología A] vs [Tecnología B]: Cuál elegir en 2025"

### Format 3: List
"X cosas que aprendí sobre [tema] trabajando en [proyecto/empresa]"

### Format 4: Guide
"Guía completa de [tema] para [audiencia]"

### Format 5: Personal
"Mi experiencia [haciendo X]: errores y aprendizajes"

### Format 6: Tool/Library
"[Herramienta]: qué es, cómo funciona y cuándo usarla"

---

**Remember**:
- Write for YOUR past self (the person who had this problem)
- Be specific, not generic
- Show, don't just tell
- Include YOUR experience, not just docs regurgitation
- Make it actionable
