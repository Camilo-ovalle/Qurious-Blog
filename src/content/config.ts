import { defineCollection, z } from "astro:content";

// Schema mejorado con campos adicionales para mejor organización y SEO
const contentSchema = z.object({
  // Campos básicos
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),

  // Imágenes (con alt text obligatorio para accesibilidad)
  heroImage: z.string().optional(),
  heroImageAlt: z.string().optional(),

  // Organización y descubrimiento
  tags: z.array(z.string()).default([]),
  category: z.enum(["tutorial", "blog", "guide"]).default("blog"),

  // Metadata adicional
  difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  estimatedReadTime: z.number().optional(),
  author: z.string().default("Camilo Ovalle"),

  // Control de publicación
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  schema: contentSchema,
});

const tutorials = defineCollection({
  schema: contentSchema,
});

export const collections = { blog, tutorials };
