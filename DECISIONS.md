# 📋 DECISIONES DEL PROYECTO

Este archivo documenta las decisiones importantes tomadas durante el desarrollo del proyecto.

---

## Identidad del Blog

### Nombre: Dev-Gate

**Fecha de decisión**: 5 de Octubre, 2025

**Razón**:
El nombre "Dev-Gate" representa la idea de ser una "puerta de entrada" al desarrollo de software para estudiantes y principiantes. El proyecto nació con la intención de ayudar a compañeros de universidad con temas que se les exigían pero no sabían por dónde empezar a abordarlos.

Aunque el blog evolucionará más allá de ese objetivo inicial, este nombre mantiene esa esencia de accesibilidad y apertura para nuevos desarrolladores.

**Alternativas consideradas**:

- Qurious Blog
- Otras opciones

**Estado**: ✅ CONFIRMADO

---

## Estrategia de Dominio

**Fecha de decisión**: 6 de Octubre, 2025

**Decisión**: ✅ Usar dominio gratuito de Netlify

**Dominio actual**: https://dev-gate.netlify.app

**Razón**:
Por temas de economía, se ha decidido comenzar con el dominio gratuito de Netlify. Esto permite:
- Costo $0/año (presupuesto inicial mínimo)
- Deploy automático desde GitHub
- HTTPS gratuito
- CDN global incluido
- Profesional y confiable

**Plan futuro**: Cuando el proyecto tenga tracción y el presupuesto lo permita, se considerará migrar a un dominio personalizado (ej: devgate.dev, dev-gate.com)

**Estado**: ✅ IMPLEMENTADO

---

## Horario de Trabajo

**Fecha de decisión**: 5 de Octubre, 2025

**Horario Laboral**: Lunes a Viernes, 7 AM - 3 PM

**Tiempo dedicado al proyecto**:

### Días de semana (L-V)

- **Personal Development (bloques nocturnos)**: 8:30 PM - 10 PM (1.5 horas)
- **Total por día**: ~1.5 horas
- **Total L-V**: ~7.5 horas/semana

### Fines de semana

- **Sábado**: 2-4 PM (Personal Development) + Flexible por la tarde
- **Domingo**: Flexible
- **Total fin de semana**: ~4-6 horas

### Total semanal estimado: 11.5 - 13.5 horas ✅

**Nota**: El horario puede cambiar en semanas futuras. Actualizar este documento cuando ocurra.

---

## Herramientas de Desarrollo

### ESLint y Prettier

**Fecha de decisión**: 9 de Octubre, 2025

**Decisión**: ✅ Implementar ESLint y Prettier para mantener calidad de código

**Herramientas elegidas**:
- **ESLint** con `eslint-plugin-astro` - Para detectar errores y bugs
- **Prettier** con `prettier-plugin-astro` - Para formateo automático
- **TypeScript ESLint** - Para soporte de TypeScript en archivos Astro

**Razón**:
- Mantener código consistente y profesional
- Detectar errores antes de que causen problemas
- Facilitar trabajo en equipo (si colaboro con otros)
- Demostrar buenas prácticas en entrevistas
- Formateo automático ahorra tiempo

**Scripts configurados**:
```bash
npm run lint           # Revisar errores
npm run format         # Formatear código
npm run format:check   # Solo verificar (para CI/CD)
```

**Estado**: ✅ IMPLEMENTADO

---

## Optimización de Imágenes

**Fecha de decisión**: 9 de Octubre, 2025

**Decisión**: ✅ Usar componente `<Image>` de Astro para optimización automática

**Características implementadas**:
- Conversión automática a WebP
- Lazy loading (primera imagen eager, resto lazy)
- Imágenes responsive automáticas
- Alt texts descriptivos para accesibilidad
- Dimensiones definidas (previene layout shift)

**Razón**:
- Mejora performance automáticamente
- Mejor Core Web Vitals (LCP, CLS)
- Reduce uso de ancho de banda
- Mejora SEO y accesibilidad
- Solo requiere cambiar `<img>` por `<Image>`

**Beneficio medido**: Conversión automática de imágenes JPG/PNG a WebP sin trabajo manual

**Estado**: ✅ IMPLEMENTADO

---

## Próximas Decisiones Pendientes

- [x] Dominio definitivo (Semana 1) - ✅ dev-gate.netlify.app
- [x] Plataforma de hosting (Vercel vs Netlify) (Semana 1-2) - ✅ Netlify
- [x] Herramientas de linting (Semana 1) - ✅ ESLint + Prettier
- [x] Optimización de imágenes (Semana 1-2) - ✅ Componente Image de Astro
- [ ] Pre-commit hooks (Semana 1-2) - En evaluación
- [ ] Sistema de tags/categorías (Semana 3-4)
- [ ] Newsletter service (Semana 5-6)
- [ ] Analytics platform (Semana 5-6)

---

**Última actualización**: 2025-10-09 20:52 (Horario Colombia)
