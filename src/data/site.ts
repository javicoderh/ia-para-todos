export type NavItem = {
  label: string;
  href: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  bullets: string[];
  audience: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  audience: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  highlighted?: boolean;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  coverLabel: string;
  content: string[];
};

export const brand = {
  name: "IA para Todos",
  tagline: "Capacitación, implementación y flujos de trabajo potenciados por IA para empresas y profesionales.",
  alternatives: ["Adopta IA", "IA en Marcha", "Taller IA", "IA Aplicada"]
};

export const company = {
  email: "hola@iaparatodos.cl",
  phone: "+56 9 8765 4321",
  whatsapp: "https://wa.me/56920536330",
  city: "Santiago, Chile"
};

export const navigation: NavItem[] = [
  { label: "Productos", href: "/productos" },
  { label: "Workshops", href: "/workshops" },
  { label: "Agentes", href: "/agentes" },
  { label: "Boletines", href: "/boletines" },
  { label: "Precios", href: "/precios" },
  { label: "News", href: "/news" },
  { label: "Contacto", href: "/contacto" }
];

export const heroStats = [
  { value: "48 h", label: "para entregar una recomendación inicial con próximos pasos claros" },
  { value: "Quick wins", label: "priorizados según fricción, tiempo perdido e impacto operativo" },
  { value: "CLP", label: "precios visibles para conversar con presupuesto desde el primer contacto" }
];

export const trustLogos = [
  "Equipos comerciales",
  "Operaciones",
  "RR. HH. y capacitación",
  "Founders y pymes",
  "Profesionales independientes"
];

export const proofPoints = [
  {
    value: "Implementación en semanas",
    label: "Las propuestas se diseñan para producir avances visibles rápido y justificar la siguiente inversión."
  },
  {
    value: "Oferta modular",
    label: "Puedes partir con un workshop, un diagnóstico o un boletín interno y escalar cuando el equipo esté listo."
  },
  {
    value: "Lenguaje no técnico",
    label: "Explicamos valor de negocio, mejoras concretas y oportunidades aplicables con un lenguaje claro para quienes toman decisiones."
  }
];

export const testimonials = [
  {
    quote: "Necesitábamos aterrizar la conversación sobre IA en tareas concretas. Lo más útil fue pasar de herramientas sueltas a hábitos claros de trabajo.",
    author: "Líder de Operaciones",
    company: "Empresa de servicios"
  },
  {
    quote: "Lo valioso no fue solo el workshop. La continuidad con ejemplos, piezas internas y próximos pasos mantuvo al equipo avanzando después de la capacitación.",
    author: "Jefatura de RR. HH.",
    company: "Grupo educacional"
  }
];

export const services: ServiceCard[] = [
  {
    title: "Workshops y capacitación",
    description: "Capacitamos equipos, profesionales y estudiantes para usar IA con seguridad, criterio y aplicaciones concretas en el trabajo diario.",
    href: "/workshops",
    bullets: ["Sesiones introductorias para partir bien", "Programas corporativos por área", "Formación práctica para profesionales y estudiantes"],
    audience: "Empresas e individuos"
  },
  {
    title: "Agentes internos y asistentes a medida",
    description: "Diseñamos asistentes internos que responden dudas frecuentes, ordenan información crítica y aceleran tareas repetitivas del equipo.",
    href: "/agentes",
    bullets: ["Asistentes por área o proceso", "Resúmenes y extracción de tareas", "Automatización y soporte interno"],
    audience: "Empresas"
  },
  {
    title: "Boletines de adopción y contenido interno",
    description: "Creamos boletines, mini guías e infografías para reforzar aprendizajes, compartir ejemplos útiles y convertir los flujos de trabajo potenciados por IA en parte de la rutina.",
    href: "/boletines",
    bullets: ["Curación por industria y cargo", "Infografías internas accionables", "Material para pantallas, onboarding y equipos"],
    audience: "Empresas"
  },
  {
    title: "Herramientas livianas y landing pages",
    description: "Desarrollamos soluciones livianas para capturar oportunidades, ordenar flujos y resolver tareas que hoy frenan al negocio.",
    href: "/productos",
    bullets: ["Landings comerciales", "Apps internas orientadas al flujo", "Herramientas simples que resuelven un problema real"],
    audience: "Empresas"
  }
];

export const howItWorks = [
  {
    step: "1. Diagnóstico rápido",
    description: "Identificamos oportunidades donde la IA puede acelerar tareas, ordenar información y mejorar la calidad del trabajo."
  },
  {
    step: "2. Priorización comercial",
    description: "Priorizamos quick wins y soluciones según impacto, urgencia, facilidad de adopción de flujos de trabajo potenciados por IA y presupuesto."
  },
  {
    step: "3. Implementación práctica",
    description: "Ejecutamos capacitación, asistentes, contenido interno o herramientas según lo que más sentido tenga para tu etapa."
  },
  {
    step: "4. Medición y continuidad",
    description: "Dejamos activos reutilizables y una ruta simple para sostener flujos de trabajo potenciados por IA, uso y mejora continua."
  }
];

export const useCases = [
  {
    title: "Operaciones",
    text: "Reducir tiempo perdido en reportes, reuniones, búsquedas internas, coordinación y tareas administrativas repetitivas."
  },
  {
    title: "Comercial y marketing",
    text: "Mejorar velocidad de respuesta, ordenar prospección, generar borradores útiles y sostener seguimiento con más consistencia."
  },
  {
    title: "RR. HH. y capacitación",
    text: "Acelerar onboarding, formación interna, difusión de buenas prácticas y adopción responsable de flujos de trabajo potenciados por IA dentro del equipo."
  },
  {
    title: "Profesionales y estudiantes",
    text: "Aprender herramientas concretas para estudiar mejor, producir más, mejorar empleabilidad y trabajar con más criterio."
  }
];

export const leadMagnets = [
  "Diagnóstico rápido de oportunidades de IA",
  "Checklist de adopción de IA para empresas",
  "10 workflows que tu equipo podría mejorar con IA este mes"
];

export const workshopPlans: PricingPlan[] = [
  {
    name: "Workshop para equipos",
    price: "desde CLP $290.000",
    description: "Sesión práctica para alinear conceptos, mostrar usos reales y salir con ideas aplicables al trabajo de la semana.",
    audience: "Equipos y pymes",
    features: ["Formato ágil y directo", "Enfoque por rol o área", "Casos aterrizados al negocio"],
    ctaLabel: "Agendar diagnóstico",
    ctaHref: "/diagnostico",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto"
  },
  {
    name: "Capacitación corporativa estándar",
    price: "CLP $590.000 – $1.290.000",
    description: "Capacitación para áreas o equipos completos con ejercicios, ejemplos y criterios para usar IA con confianza.",
    audience: "Empresas",
    features: ["Material de apoyo reutilizable", "Casos por industria o función", "Recomendaciones concretas de adopción"],
    ctaLabel: "Agendar diagnóstico",
    ctaHref: "/diagnostico",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto",
    highlighted: true
  },
  {
    name: "Programa corporativo de flujos potenciados por IA",
    price: "desde CLP $1.990.000",
    description: "Programa para instalar hábitos, procesos y comunicación interna que permitan usar IA con continuidad y sentido.",
    audience: "Empresas medianas",
    features: ["Roadmap por etapas", "Capacitación + contenido interno", "Quick wins priorizados por impacto"],
    ctaLabel: "Agendar diagnóstico",
    ctaHref: "/diagnostico",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto"
  }
];

export const individualPlans: PricingPlan[] = [
  {
    name: "Workshop abierto introductorio",
    price: "CLP $24.990 – $39.990",
    description: "Punto de entrada accesible para empezar a usar IA con criterio en estudios, trabajo y productividad personal.",
    audience: "Principiantes",
    features: ["Herramientas clave para empezar", "Ejercicios guiados", "Aplicaciones académicas y laborales"],
    ctaLabel: "Reservar cupo",
    ctaHref: "/contacto",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto"
  },
  {
    name: "Curso práctico especializado",
    price: "CLP $59.990 – $119.990",
    description: "Formación práctica para dominar un tema útil: productividad, workflows, prompts, automatización o programación asistida.",
    audience: "Profesionales",
    features: ["Aplicación inmediata", "Recursos descargables", "Enfoque carrera-utilidad"],
    ctaLabel: "Reservar cupo",
    ctaHref: "/contacto",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto",
    highlighted: true
  },
  {
    name: "Programa formativo intensivo",
    price: "CLP $149.990 – $349.990",
    description: "Ruta más completa para integrar IA al trabajo de forma consistente y construir una ventaja práctica real.",
    audience: "Upskilling profesional",
    features: ["Módulos prácticos", "Acompañamiento", "Proyecto o flujo aplicable al final"],
    ctaLabel: "Reservar cupo",
    ctaHref: "/contacto",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto"
  }
];

export const newsletterPlans: PricingPlan[] = [
  {
    name: "Plan Base",
    price: "CLP $19.990 / mes",
    description: "Resumen semanal de herramientas, novedades y usos concretos según la industria o intereses del equipo.",
    audience: "Empresas pequeñas",
    features: ["Curación semanal", "Selección útil de herramientas", "Tono ejecutivo y accionable"],
    ctaLabel: "Solicitar asesoría gratuita",
    ctaHref: "/contacto",
    secondaryCtaLabel: "Agendar diagnóstico",
    secondaryCtaHref: "/diagnostico"
  },
  {
    name: "Plan Pro",
    price: "CLP $89.990 / mes",
    description: "Mayor frecuencia, mini guías y ejemplos listos para transformar ideas en uso real dentro del equipo.",
    audience: "Equipos activos",
    features: ["Alta frecuencia", "Mini guías prácticas", "Ideas de productividad y workflow"],
    ctaLabel: "Solicitar asesoría gratuita",
    ctaHref: "/contacto",
    secondaryCtaLabel: "Agendar diagnóstico",
    secondaryCtaHref: "/diagnostico",
    highlighted: true
  },
  {
    name: "Plan Adopción",
    price: "desde CLP $690.000 / mes",
    description: "Boletín, infografías y piezas internas para mantener la adopción viva y visible en toda la organización.",
    audience: "Empresas con cultura interna",
    features: ["Contenido interno a medida", "Piezas para pantallas y canales internos", "Mensajería de cambio y adopción de flujos potenciados por IA"],
    ctaLabel: "Agendar diagnóstico",
    ctaHref: "/diagnostico",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto"
  }
];

export const agentPlans: PricingPlan[] = [
  {
    name: "Implementación base",
    price: "desde CLP $990.000 a $2.490.000",
    description: "Incluye un asistente ejecutivo base más 1 a 3 features especializados según el/los flujos especializados que quieras implementar.",
    audience: "Empresas",
    features: ["Asistente ejecutivo base", "1 a 3 features especializados", "Diseño orientado al proceso real"],
    ctaLabel: "Agendar diagnóstico",
    ctaHref: "/diagnostico",
    secondaryCtaLabel: "Solicitar asesoría gratuita",
    secondaryCtaHref: "/contacto",
    highlighted: true
  },
  {
    name: "Features extra",
    price: "desde CLP $450.000 c/u",
    description: "Módulos adicionales para resolver necesidades específicas de operación, soporte, coordinación o análisis.",
    audience: "Empresas",
    features: ["Extracción de tareas", "Resúmenes de reuniones", "Automatizaciones específicas por caso"],
    ctaLabel: "Solicitar asesoría gratuita",
    ctaHref: "/contacto",
    secondaryCtaLabel: "Agendar diagnóstico",
    secondaryCtaHref: "/diagnostico"
  }
];

export const faqs = [
  {
    question: "¿Trabajan solo con empresas grandes?",
    answer: "No. Trabajamos con pymes, equipos medianos, áreas específicas dentro de empresas y también con profesionales o estudiantes que buscan formación útil."
  },
  {
    question: "¿Los precios publicados son finales?",
    answer: "Son referencias comerciales para ayudarte a estimar inversión. El valor final depende de alcance, complejidad, cantidad de usuarios y profundidad del servicio."
  },
  {
    question: "¿Pueden partir con algo pequeño?",
    answer: "Sí. Muchas veces conviene partir con un diagnóstico o un workshop breve, validar utilidad y luego escalar a agentes, contenido interno o herramientas."
  },
  {
    question: "¿Cómo recomiendan empezar si todavía no tenemos una estrategia clara?",
    answer: "Lo más efectivo suele ser comenzar con un diagnóstico rápido. Eso permite detectar oportunidades reales, priorizar quick wins y elegir mejor entre capacitación, agentes o contenido interno."
  }
];

export const articles: Article[] = [
  {
    slug: "como-detectar-workflows-que-si-conviene-mejorar-con-ia",
    title: "Cómo detectar workflows que sí conviene mejorar con IA",
    category: "Adopción",
    excerpt: "Una guía práctica para priorizar procesos donde la IA realmente ahorra tiempo, reduce errores y mejora la velocidad de respuesta.",
    date: "28 marzo 2026",
    readTime: "5 min",
    author: "Equipo IA para Todos",
    coverLabel: "Priorizar antes de automatizar",
    content: [
      "La adopción de IA funciona mejor cuando parte por procesos útiles y frecuentes. Antes de implementar cualquier herramienta conviene revisar dónde el equipo repite tareas, necesita más contexto o podría responder con mayor agilidad.",
      "Los procesos que más valor generan suelen compartir tres rasgos: alto volumen, baja variabilidad y un impacto claro en tiempo o calidad. En esos casos la IA puede apoyar redacción, clasificación, resumen, extracción de tareas o preparación de insumos.",
      "Con entrevistas breves, observación de rutinas y una revisión simple del flujo actual ya se pueden detectar oportunidades con retorno tangible y una ruta clara para implementarlas."
    ]
  },
  {
    slug: "que-deberia-incluir-un-workshop-de-ia-para-equipos-no-tecnicos",
    title: "Qué debería incluir un workshop de IA para equipos no técnicos",
    category: "Capacitación",
    excerpt: "Los workshops útiles aterrizan casos reales, criterios claros y hábitos que el equipo puede aplicar de inmediato.",
    date: "24 marzo 2026",
    readTime: "4 min",
    author: "Equipo IA para Todos",
    coverLabel: "Capacitación aterrizada",
    content: [
      "Cuando un equipo no técnico recibe formación en IA, el objetivo es acercar la herramienta al trabajo diario con ejemplos que realmente les sirvan.",
      "Eso exige mostrar casos por rol, ejercicios con material del propio trabajo y criterios simples para usar IA con más seguridad y mejores resultados.",
      "Una buena capacitación acelera adopción y deja un lenguaje común para que el equipo siga aplicando lo aprendido después del workshop."
    ]
  },
  {
    slug: "boletines-internos-como-mover-la-adopcion-mas-alla-del-anuncio",
    title: "Boletines internos: cómo mover la adopción más allá del anuncio",
    category: "Contenido interno",
    excerpt: "Si una empresa quiere cambiar hábitos, necesita repetición útil. Ahí los boletines, mini guías e infografías cumplen un rol decisivo.",
    date: "20 marzo 2026",
    readTime: "6 min",
    author: "Equipo IA para Todos",
    coverLabel: "Comunicación que sí mueve hábitos",
    content: [
      "La adopción de IA crece mejor cuando existe una capa editorial que acompaña el cambio con ejemplos, recordatorios y beneficios concretos.",
      "Un boletín bien diseñado ordena prioridades, muestra avances y ayuda a que cada área entienda cómo la IA aterriza en tareas concretas.",
      "Cuando esa comunicación además se apoya con material visual interno, pantallas o piezas cortas, la empresa gana continuidad, visibilidad y una cultura de uso más consistente."
    ]
  }
];

export const seoDefaults = {
  title: "IA para Todos | IA práctica para empresas y profesionales",
  description:
    "Sitio comercial en español para vender workshops, agentes internos, boletines de adopción y soluciones tecnológicas livianas enfocadas en resultados.",
  url: "https://iaparatodos.cl"
};
