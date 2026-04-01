# IA para Todos Frontend Seed

Semilla inicial en Astro para un sitio comercial en español orientado a workshops, agentes internos, boletines de adopción, recursos y news.

## Rutas incluidas

- `/`
- `/productos`
- `/workshops`
- `/agentes`
- `/boletines`
- `/news`
- `/news/[slug]`
- `/precios`
- `/contacto`
- `/casos-de-uso`
- `/diagnostico`
- `/recursos`
- `/faq`
- `/nosotros`

## Arquitectura recomendada

- `src/data/site.ts`: contenido estático centralizado para oferta, pricing, FAQs, navegación y artículos.
- `src/components/`: componentes reutilizables de marketing.
- `src/layouts/`: layout base con SEO simple y shell compartido.
- `src/pages/`: rutas comerciales y editoriales.

## Puntos de integración futura

- Formularios: conectar bloques de captura y contacto con HubSpot, Brevo, MailerLite, Formspree o backend propio.
- CMS: migrar `src/data/site.ts` a Sanity, Contentful, Strapi, Directus o Astro Content Collections.
- CRM y ventas: sincronizar `/diagnostico` y `/contacto` con pipelines, scoring y agenda.
- News: mover artículos a una colección de contenido o CMS con categorías, autores y featured images.
- Pricing: exponer planes desde una fuente dinámica para campañas, tests o variaciones por segmento.

## Modelo de contenido sugerido

- `service`
  - `slug`
  - `name`
  - `segment`
  - `summary`
  - `benefits[]`
  - `cta_primary`
  - `cta_secondary`
- `pricingPlan`
  - `service_slug`
  - `name`
  - `audience`
  - `price_label`
  - `range_min_clp`
  - `range_max_clp`
  - `features[]`
  - `highlighted`
- `article`
  - `slug`
  - `title`
  - `category`
  - `excerpt`
  - `published_at`
  - `read_time`
  - `author`
  - `cover_label`
  - `body`

## Branding

Nombre actual: `IA para Todos`

Alternativas sugeridas:

- `Adopta IA`
- `IA en Marcha`
- `Taller IA`
- `IA Aplicada`

## Comandos

```bash
npm install
npm run dev
```
