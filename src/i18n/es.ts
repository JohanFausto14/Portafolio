import type { en } from "./en";

export const es: typeof en = {
  app: {
    skipToContent: "Saltar al contenido",
  },
  nav: {
    menuOpen: "Abrir menú de navegación",
    menuClose: "Cerrar menú de navegación",
    switchLanguage: "Cambiar idioma a Inglés",
    items: [
      { name: "Mi Enfoque", href: "#about" },
      { name: "Proyectos Destacados", href: "#projects" },
      { name: "Trayectoria", href: "#experience" },
      { name: "Tecnologías", href: "#skills" },
      { name: "Formación", href: "#education" },
      { name: "Contacto", href: "#contact" },
    ],
  },
  hero: {
    available: "Disponible para trabajar",
    greeting: "Johan Fausto",
    role: "Ingeniero de Software",
    description:
      "Diseño y desarrollo de aplicaciones web y móviles para organizaciones que necesitan software confiable y preparado para crecer.",
    viewWork: "Ver proyectos",
    contactMe: "Contactarme",
    downloadCv: "Descargar CV",
  },
  about: {
    title: "MI ENFOQUE",
    tagline:
      "Antes de escribir código, dedico tiempo a entender el problema real detrás de la solicitud. Un sistema solo tiene valor si la persona que lo usa todos los días logra resolver su trabajo sin fricción.",
    metrics: "3+ años de experiencia · 20+ proyectos desarrollados",
    principles: [
      {
        num: "01",
        title: "ENTENDER",
        desc: "Analizar contexto, usuarios y requerimientos antes de diseñar la solución.",
      },
      {
        num: "02",
        title: "SIMPLIFICAR",
        desc: "Reducir complejidad innecesaria en arquitectura, interfaz y flujo de trabajo.",
      },
      {
        num: "03",
        title: "ENTREGAR",
        desc: "Construir soluciones mantenibles, escalables y listas para producción.",
      },
    ],
  },
  projects: {
    title: "PROYECTOS DESTACADOS",
    exploreCaptures: "Explorar Capturas",
    labels: {
      problem: "Contexto",
      responsibility: "Mi Aporte",
      solution: "La Solución",
      result: "Resultado",
      visitSite: "Visitar sitio",
      viewCapture: "Ver captura",
      viewCaptures: "Ver capturas",
    },
    gallery: {
      ariaLabel: "Galería de capturas de proyectos",
      close: "Cerrar ventana",
      zoomIn: "Acercar",
      zoomOut: "Alejar",
      reset: "Restablecer",
      previousSlide: "Captura anterior",
      nextSlide: "Siguiente captura",
      goToSlide: "Ir a la captura",
      screenshot: "Captura de pantalla",
      lector: [
        "Proyecto Lector — Plataforma web educativa para el desarrollo y seguimiento de la comprensión lectora",
      ],
      lira: [
        "Ecosistema LIRA — Ecosistema multiplataforma interactivo infantil (Web, Android TV, Alexa)",
      ],
      tecnosol: [
        "Tecnosol ERP/CRM — Pantalla de inicio de sesión y autenticación",
        "Tecnosol ERP/CRM — Panel de inicio y navegación del sistema",
        "Tecnosol ERP/CRM — Módulo de administración y registro de usuarios",
        "Tecnosol ERP/CRM — Módulo de registro y captura de pedidos",
        "Tecnosol ERP/CRM — Tabla general de registros y seguimiento",
        "Tecnosol ERP/CRM — Módulo de estadísticas y métricas operativas",
        "Tecnosol ERP/CRM — Módulo de notificaciones y órdenes de mantenimiento",
        "Tecnosol ERP/CRM — Módulo de reportes y atención de quejas",
        "Tecnosol ERP/CRM — Módulo de pagos y transacciones",
        "Tecnosol ERP/CRM — Catálogo y administración de modelos de productos",
        "Tecnosol ERP/CRM — Módulo de gestión de asesores comerciales",
      ],
      invernadero: [
        "Proyecto MicroGreen — Prototipo IoT con ESP32 y sensores ambientales",
      ],
    },
    cases: [
      {
        id: "lector",
        title: "Proyecto Lector",
        tagline:
          "Plataforma educativa para preparatorias y universidades, enfocada en fortalecer la comprensión lectora y facilitar el seguimiento del avance estudiantil.",
        problem:
          "Las instituciones educativas enfrentaban baja comprensión lectora y poca visibilidad centralizada sobre el desempeño de los alumnos.",
        responsibility:
          "Definí el cronograma y la asignación de tareas del proyecto, participé en el desarrollo frontend de todos los módulos —alumnos, padres, maestros, escuelas y administrador (control de accesos y licencias)— y colaboré en el diseño de la base de datos.",
        solution:
          "Reúne lectura digital, evaluaciones dinámicas, gestión de licencias y seguimiento del progreso mediante paneles adaptados a cada tipo de usuario.",
        result:
          "Unificó la operación de la plataforma en un solo lugar, simplificando el trabajo diario de docentes, directivos y familias.",
      },
      {
        id: "lira",
        title: "Ecosistema LIRA",
        tagline:
          "Sistema multiplataforma creado para impulsar el aprendizaje de la lectura infantil mediante experiencias interactivas en web, móvil, Android TV y Alexa.",
        problem:
          "Los métodos tradicionales de enseñanza de la lectura ofrecían poca interactividad, personalización y seguimiento del progreso de los estudiantes.",
        responsibility:
          "Lideré la planificación del proyecto y participé en decisiones de arquitectura y desarrollo, incluyendo la integración de componentes para Android TV, web y experiencias interactivas, así como en el diseño del modelo de datos.",
        solution:
          "Integra actividades gamificadas, seguimiento del progreso y sincronización de datos entre todos los dispositivos del ecosistema.",
        result:
          "Permitió que los niños continuaran su aprendizaje desde cualquier dispositivo, dando a padres y tutores visibilidad constante de su progreso.",
      },
      {
        id: "tecnosol",
        title: "Tecnosol ERP / CRM",
        tagline:
          "Plataforma desarrollada para reemplazar procesos manuales y centralizar la operación comercial y administrativa de la empresa.",
        problem:
          "La gestión de operaciones mediante archivos Excel generaba riesgo de errores, lentitud en consultas y dificultades para escalar los registros.",
        responsibility:
          "Implementé los módulos de autenticación, pagos y estadísticas, la lógica de pedidos para los sectores hotelero, industrial, hospitalario, residencial, albercas y fotovoltaico, y las notificaciones de mantenimiento.",
        solution:
          "Unifica clientes, operaciones y mantenimiento en un solo entorno, con acceso por roles y visibilidad en tiempo real.",
        result:
          "Sustituyó las hojas de cálculo por un flujo digital único, reduciendo errores y acelerando la respuesta a clientes.",
      },
      {
        id: "invernadero",
        title: "Proyecto MicroGreen",
        tagline:
          "Sistema IoT desarrollado para automatizar el monitoreo y cuidado de invernaderos domésticos mediante sensores, ESP32 y una aplicación móvil.",
        problem:
          "Los pequeños invernaderos carecían de una forma sencilla de supervisar las condiciones ambientales y optimizar el cuidado de las plantas.",
        responsibility:
          "Coordiné al equipo de 5 integrantes en la construcción del prototipo, definí la ubicación de sensores y programé la lógica de comunicación entre el ESP32 y la app móvil, validando las mediciones con pruebas de integración.",
        solution:
          "Combina sensores ambientales, un ESP32 y una aplicación móvil para visualizar información en tiempo real y apoyar la automatización del cultivo.",
        result:
          "Demostró la viabilidad de automatizar el cuidado de invernaderos domésticos mediante un sistema accesible y escalable, replicable en otros cultivos.",
      },
    ],
  },
  experience: {
    title: "TRAYECTORIA PROFESIONAL",
    jobs: [
      {
        id: "lector",
        title: "Frontend Developer · Líder de Proyecto",
        company: "Cliente Institucional Privado — Proyecto Lector (freelance)",
        period: "Nov 2025 - Jul 2026",
        description:
          "Lideré a un equipo de 3 integrantes en el desarrollo de esta plataforma de lectura para nivel medio superior y superior, surgida de una alianza establecida durante la presentación de LIRA en Innovation Fest Guadalajara 2025.",
      },
      {
        id: "consol",
        title: "Full Stack Developer",
        company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR (por contrato)",
        period: "Ene 2026 - Abr 2026",
        description:
          "Participé en la migración de un sistema financiero de escritorio a una plataforma web durante mi periodo de estadías profesionales, mientras continuaba el desarrollo de Proyecto Lector.",
      },
      {
        id: "lira",
        title: "Software Developer · Líder de Proyecto",
        company: "Proyecto LIRA (proyecto propio)",
        period: "Ene 2025 - Nov 2025",
        description:
          "Lideré a un equipo de 4 integrantes en el desarrollo de un ecosistema que funciona de forma coherente en formatos tan distintos como una pantalla de TV, un asistente de voz y un dispositivo móvil.",
        link: {
          text: "Presentado en Innovation Fest Guadalajara 2025",
          url: "https://innovationfest.jalisco.gob.mx/",
        },
      },
      {
        id: "tecnosol",
        title: "Full Stack Developer",
        company: "Tecnosol S.A. de C.V. (por contrato)",
        period: "May 2024 - Ago 2024",
        description:
          "Formé parte de un equipo de 3 desarrolladores con una estructura completamente horizontal, sin jerarquías ni roles fijos, definiendo juntos cada decisión técnica del proyecto.",
      },
      {
        id: "invernadero",
        title: "Software Developer · Líder de Proyecto",
        company: "Proyecto MicroGreen (proyecto propio)",
        period: "Ene 2024 - Abr 2024",
        description:
          "Lideré a un equipo de 5 integrantes en el diseño y construcción de un invernadero inteligente doméstico, coordinando un desarrollo multidisciplinario que abarcó desde la estructura física hasta la electrónica y el software, culminando en un prototipo completamente funcional.",
      },
      {
        id: "utzmg",
        title: "Software Developer",
        company: "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
        period: "Sep 2022 - Ene 2023",
        description:
          "Desarrollo de una aplicación web para el control de asistencia estudiantil, participando en la construcción de la solución desde el modelo de datos hasta la interfaz de usuario.",
      },
    ],
  },
  skills: {
    title: "TECNOLOGÍAS Y CAPACIDADES",
    categories: [
      {
        name: "Interfaces",
        capability:
          "Desarrollo de aplicaciones web y móviles responsivas, componentes reutilizables y experiencias centradas en el usuario.",
        skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      },
      {
        name: "Backend y APIs",
        capability:
          "Diseño de lógica de negocio, autenticación y servicios REST para aplicaciones empresariales y educativas.",
        skills: ["Node.js", "Express", "NestJS", "PHP", "JWT", "REST API"],
      },
      {
        name: "Datos",
        capability:
          "Modelado de información, consultas y persistencia en bases de datos relacionales y NoSQL.",
        skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Prisma", "TypeORM"],
      },
      {
        name: "Infraestructura y herramientas",
        capability: "Control de versiones, despliegue y entorno de desarrollo.",
        skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "Postman", "Android Studio", "VS Code"],
      },
    ],
  },
  education: {
    title: "FORMACIÓN & CERTIFICACIONES",
    degrees: [
      {
        title: "Ingeniería en Desarrollo y Gestión de Software",
        period: "Sep 2024 – Abr 2026",
        badge: "Título de Ingeniería",
      },
      {
        title: "Técnico Superior Universitario en Desarrollo de Software Multiplataforma",
        period: "Sep 2022 – Ago 2024",
        badge: "Título de TSU",
      },
    ],
    desc: "Trayectoria académica de Técnico Superior Universitario a Ingeniería, consolidada en la práctica mediante proyectos reales en equipo, con metodologías ágiles (Scrum, Kanban y Extreme Programming [XP]) como eje constante de trabajo.",
    certCategory: "Inglés",
    certSubtitle: "B2 · Intermedio Alto",
    certDesc:
      "Evaluación internacional oficial de inglés conforme al Marco Común Europeo de Referencia para las Lenguas (MCER).",
    skillsTitle: "Habilidades evaluadas",
    skills: ["Comprensión lectora", "Comprensión auditiva", "Expresión escrita", "Expresión oral"],
    certBtn: "Ver certificado",
  },
  contact: {
    title: "CONTACTO",
    subtitle: "Si crees que puedo aportar a tu equipo o a tu próximo proyecto, hablemos.",
    email: "Correo",
    clickToCopy: "Clic para copiar",
    copied: "¡Copiado al portapapeles!",
    phone: "WhatsApp",
    location: "Ubicación",
    locationVal: "Guadalajara, Jalisco, México",
  },
  footer: {
    descriptor: "Ingeniero de Software",
    backToTop: "VOLVER ARRIBA",
  },
};
