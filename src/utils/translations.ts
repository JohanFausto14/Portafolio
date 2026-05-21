export const translations = {
  en: {
    personal: {
      name: "Ari Johan Alvarado Fausto",
      email: "johanalvarado296@gmail.com",
      phone: "+52 3320131621",
      location: "Guadalajara, Jalisco, México",
      github: "https://github.com/JohanFausto14",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Ari Johan Alvarado Fausto",
      available: "Available for Work",
      titleStart: "Full Stack",
      titleEnd: "Developer",
      description:
        "Specialized in building scalable web and mobile applications, integrating seamless frontend experiences with robust backend architectures.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      cvLink: "/CV_en.pdf",
      roles: [
        "Full Stack Developer",
        "Web & Mobile Developer",
        "Software Engineer",
      ],
    },
    about: {
      title: "About Me",
      role: "Software Developer",
      p1: "I am a Software Development and Management Engineer, specializing in web and mobile applications. I have solid experience in frontend development using React and Next.js, as well as in backend development with Node.js, NestJS, and Express.",
      p2: "I like to understand the problem before writing code. I have worked on projects from scratch, system migrations, REST API integrations, and database connections such as PostgreSQL, MongoDB, and MySQL, always ensuring the solution is practical and easy to maintain.",
      p3: "I enjoy environments with real challenges and adapt easily to the project's needs. I am looking for an opportunity where I can continue to grow and bring real value to the team.",
      yearsExp: "Years Experience",
      projectsCompleted: "Projects Completed",
    },
    skills: {
      title: "Technical Skills",
      subtitle:
        "A comprehensive toolkit for building modern, scalable web and mobile applications.",
      categories: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        devops: "DevOps & Tools",
        management: "Soft Skills",
      },
      lists: {
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "React Native",
          "Tailwind CSS",
          "HTML/CSS",
          "Responsive Design",
          "UI/UX",
          "Performance Optimization",
        ],
        backend: [
          "Node.js",
          "NestJS",
          "Express.js",
          "PHP",
          "REST APIs",
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "SQL Server",
        ],
        devops: [
          "Git",
          "GitHub",
          "Linux",
          "Postman",
          "Android Studio",
          "Vercel",
          "Render",
          "Docker",
          "AWS",
        ],
        management: [
          "Problem Solving",
          "Adaptability",
          "Communication",
          "Teamwork",
        ],
      },
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          title: "Front End Developer",
          company: "Private Client",
          period: "Nov 2025 - Present",
          description:
            "Development of an interactive reading web platform aimed at high school and higher education institutions. Focused on UX and performance, REST API integration, database design participation, digital reader implementation with annotation tools, automated post-reading assessments, PDF reports generation, role-based access control, and responsive interface development.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR",
          period: "Jan 2026 - Apr 2026",
          description:
            "Development of a web system for credit management and centralized administration of financial information. Migration of functionalities from desktop to web platform, external API integration, development of individual and group credit modules, business logic implementation, and improvement of information traceability.",
        },
        {
          title: "Software Developer",
          company: "LIRA Project",
          period: "Jan 2025 - Nov 2025",
          description:
            "Development of a multiplatform educational system focused on children's reading, available on Android TV, Alexa, smartwatches, web, and mobile app. System integration across multiple platforms within the same ecosystem.",
          link: {
            text: "Presented at Innovation Fest 2025",
            url: "https://educacion-lira.vercel.app",
          },
        },
        {
          title: "Software Developer",
          company: "MicroGreen Project (IoT & Smart Agriculture)",
          period: "Jan 2024 - Dec 2024",
          description:
            "Design and implementation of a greenhouse monitoring and automation system. Measurement of humidity, temperature, and light using sensors. Automated irrigation control via mobile app. Integration with MongoDB and IoT devices (Arduino and ESP32).",
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol S.A. de C.V.",
          period: "Apr 2024 - Aug 2024",
          description:
            "Development and implementation of a web application for customer and order management with an e-commerce approach. Automation of administrative processes, REST API integration, order management functionalities development, and deployment on a dedicated server.",
        },
        {
          title: "Web Developer",
          company: "UTZMG University",
          period: "Sep 2022 - Jan 2023",
          description:
            'Complete development of the "Take Quick List" web application for student attendance registration and tracking. Participation in frontend, backend, and database management. Implementation of data validation and system logic.',
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Software Development and Management Engineering",
          institution:
            "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
          location: "Santa Cruz de las Flores, Jal.",
          period: "Sep 2022 - Apr 2026",
          description:
            "Comprehensive education focused on creating scalable technological solutions. Active participation in the development of multiple hands-on projects from conception to deployment, applying software engineering best practices.",
          achievements: [
            "Specialization in Web & Mobile Development (Full Stack)",
            "Relational and NoSQL Database Design",
            "Implementation of Agile Methodologies (Scrum)",
            "Software Architecture and Cloud Deployment",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "A selection of my most impactful projects, built with a focus on real-world utility.",
      technologiesUsed: "Technologies Used",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Proyecto Lector",
          description:
            "Interactive web reading platform for educational institutions focused on measuring and improving student reading comprehension. It includes a custom PDF reader with highlighting, annotation, definition lookup, and note-taking tools, plus automatic assessments with a dynamic question variation engine to prevent repetitive answers. The system generates PDF performance reports for teachers and features role-based access control. Developed with Next.js, Tailwind CSS, Node.js, and PostgreSQL, with CI/CD integration and cloud deployment.",
        },
        {
          title: "LIRA (Lectura Interactiva de Rapido Aprendizaje)",
          description:
            "Multiplatform educational ecosystem focused on children's interactive reading, available on Android TV, Alexa, smartwatches, mobile app, web, and admin panel. It centralizes API services and progress synchronization across devices through a unified backend architecture. Includes gamified reading sessions and adaptive content to enhance child engagement. Developed with React Native, Node.js, Express, and MongoDB.",
        },
        {
          title: "Invernadero",
          description:
            "IoT smart agriculture system designed to monitor and automate greenhouses in real time. Arduino and ESP32 sensors collect humidity, temperature, and ambient light data via Bluetooth Low Energy (BLE), triggering automated irrigation and climate control rules. It includes a React Native mobile app with real-time monitoring, historical charts, and manual system control.",
        },
        {
          title: "Tecnosol",
          description:
            "ERP/CRM administrative web system for comprehensive management of solar installation projects across residential, industrial, and commercial sectors. It manages orders, maintenance, equipment models, payments, and business statistics through interactive dashboards and PDF report generation. Developed with React, TypeScript, Node.js, Express, and MySQL, featuring role-based access control and REST API consumption.",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Have a project in mind or just want to say hi? I'd love to hear from you.",
      infoTitle: "Contact Information",
      email: "Email",
      phone: "Phone",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        placeholders: {
          name: "John Doe",
          email: "john@example.com",
          subject: "Project Inquiry",
          message: "Your message here...",
        },
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    personal: {
      name: "Ari Johan Alvarado Fausto",
      email: "johanalvarado296@gmail.com",
      phone: "+52 3320131621",
      location: "Guadalajara, Jalisco, México",
      github: "https://github.com/JohanFausto14",
    },
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Ari Johan Alvarado Fausto",
      available: "Disponible para Trabajar",
      titleStart: "Desarrollador",
      titleEnd: "Full Stack",
      description:
        "Construyo aplicaciones web y móviles escalables, integrando experiencias frontend fluidas con arquitecturas backend sólidas y escalables. Me enfoco en llevar ideas complejas a productos funcionales, desde proyectos de cero hasta sistemas en producción.",
      viewWork: "Ver Mi Trabajo",
      contactMe: "Contáctame",
      downloadCv: "Descargar CV",
      cvLink: "/CV_es.pdf",
      roles: [
        "Desarrollador Full Stack",
        "Desarrollador Web & Móvil",
        "Ingeniero de Software",
      ],
    },
    about: {
      title: "Sobre Mí",
      role: "Desarrollador de Software",
      p1: "Soy Ingeniero en Desarrollo y Gestión de Software, especializado en aplicaciones web y móviles. Cuento con experiencia en desarrollo frontend utilizando React y Next.js, así como en backend con Node.js, NestJS y Express.",
      p2: "Me gusta entender el problema antes de escribir código. He trabajado en proyectos desde cero, migraciones de sistemas, integraciones con APIs REST y conexión con bases de datos como PostgreSQL, MongoDB y MySQL, siempre buscando que la solución sea práctica y fácil de mantener.",
      p3: "Disfruto los entornos donde hay retos reales y me adapto con facilidad a lo que el proyecto necesite. Busco una oportunidad donde pueda seguir creciendo y aportar valor real al equipo.",
      yearsExp: "Años de Experiencia",
      projectsCompleted: "Proyectos Completados",
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle:
        "Un conjunto de herramientas completo para construir aplicaciones web y móviles modernas y escalables.",
      categories: {
        frontend: "Desarrollo Frontend",
        backend: "Desarrollo Backend",
        devops: "DevOps y Herramientas",
        management: "Habilidades Blandas",
      },
      lists: {
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "React Native",
          "Tailwind CSS",
          "HTML/CSS",
          "Responsive Design",
          "UI/UX",
          "Optimización de Rendimiento",
        ],
        backend: [
          "Node.js",
          "NestJS",
          "Express.js",
          "PHP",
          "REST APIs",
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "SQL Server",
        ],
        devops: [
          "Git",
          "GitHub",
          "Linux",
          "Postman",
          "Android Studio",
          "Vercel",
          "Render",
          "Docker",
          "AWS",
        ],
        management: [
          "Liderazgo",
          "Resolución de Problemas",
          "Adaptabilidad",
          "Comunicación",
          "Trabajo en Equipo"
        ],
      },
    },
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          title: "Front End Developer",
          company: "Cliente privado",
          period: "Nov 2025 - Presente",
          description:
            "Desarrollo de plataforma web de lectura interactiva orientada a instituciones de educación media superior y superior. Desarrollo del frontend enfocado en experiencia de usuario y rendimiento. Integración de APIs REST, diseño de base de datos, implementación de lector digital con herramientas de anotación, evaluaciones automáticas, reportes PDF, control de acceso por roles y desarrollo de interfaz responsiva.",
        },
        {
          title: "Full Stack Developer",
          company: "CONSOL NEGOCIOS SA DE CV SOFOM ENR",
          period: "Ene 2026 - Abr 2026",
          description:
            "Desarrollo de sistema web para la gestión de créditos y administración centralizada de información financiera. Migración de funcionalidades desde sistema de escritorio a plataforma web, integración con APIs externas, desarrollo de módulos de crédito individual, crédito grupal y seguros. Implementación de lógica de negocio y mejora en la trazabilidad de la información.",
        },
        {
          title: "Software Developer",
          company: "Proyecto LIRA (Propiedad intelectual)",
          period: "Ene 2025 - Nov 2025",
          description:
            "Desarrollo de sistema educativo multiplataforma enfocado en lectura infantil, disponible en Android TV, Alexa, smartwatches, web y aplicación móvil. Desarrollo e integración del sistema en múltiples plataformas dentro de un mismo ecosistema.",
          link: {
            text: "Presentado en Innovation Fest 2025",
            url: "https://innovationfest.jalisco.gob.mx/",
          },
        },
        {
          title: "Software Developer",
          company: "Proyecto MicroGreen (IoT & Smart Agriculture)",
          period: "Ene 2024 - Dic 2024",
          description:
            "Diseño e implementación de sistema de monitoreo y automatización de invernaderos. Medición de humedad, temperatura y luz mediante sensores. Control automatizado de riego a través de aplicación móvil. Integración con MongoDB y dispositivos IoT (Arduino y ESP32).",
        },
        {
          title: "Full Stack Developer",
          company: "Tecnosol",
          period: "Abr 2024 - Ago 2024",
          description:
            "Desarrollo e implementación de aplicación web para gestión de clientes y pedidos con enfoque tipo e-commerce. Automatización de procesos administrativos, integración de APIs REST, desarrollo de funcionalidades de gestión de pedidos y despliegue en servidor dedicado.",
        },
        {
          title: "Web Developer",
          company: "Universidad UTZMG",
          period: "Sep 2022 - Ene 2023",
          description:
            'Desarrollo completo de la aplicación web "Take Quick List" para el registro y seguimiento de asistencia estudiantil. Participación en frontend, backend y manejo de base de datos. Implementación de validación de datos y lógica del sistema.',
        },
      ],
    },
    education: {
      title: "Escolaridad",
      items: [
        {
          degree: "Ingeniería en Desarrollo y gestión de software",
          institution:
            "Universidad Tecnológica de la Zona Metropolitana de Guadalajara (UTZMG)",
          location: "Santa Cruz de las Flores, Jal.",
          period: "Sep 2022 - Abr 2026",
          description:
            "Formación integral enfocada en la creación de soluciones tecnológicas escalables. Participación activa en el desarrollo de múltiples proyectos prácticos desde la concepción hasta el despliegue, aplicando buenas prácticas de ingeniería de software.",
          achievements: [
            "Especialización en desarrollo web y móvil (Full Stack)",
            "Diseño y administración de bases de datos relacionales y NoSQL",
            "Implementación de metodologías ágiles (Scrum, Kanban, Extreme Programming)",
            "Arquitectura de software y despliegue en la nube",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle:
        "Una selección de mis proyectos más impactantes, construidos con enfoque en utilidad real.",
      technologiesUsed: "Tecnologías Utilizadas",
      liveDemo: "Demo en Vivo",
      items: [
        {
          title: "Proyecto Lector",
          description:
            "Plataforma web de lectura interactiva para instituciones educativas enfocada en medir y mejorar la comprensión lectora estudiantil. Incluye un lector PDF personalizado con herramientas de subrayado, anotaciones, obtención de definiciones y toma de notas, además de evaluaciones automáticas con motor de variación dinámica de preguntas para evitar respuestas repetitivas. El sistema genera reportes PDF de desempeño para docentes y cuenta con control de acceso por roles. Desarrollada con Next.js, Tailwind CSS, Node.js y PostgreSQL, con integración CI/CD y despliegue en la nube.",
        },
        {
          title: "LIRA (Lectura Interactiva de Rapido Aprendizaje)",
          description:
            "Ecosistema educativo multiplataforma enfocado en lectura interactiva infantil, disponible en Android TV, Alexa, smartwatches, aplicación móvil, web y panel administrativo. Centraliza servicios API y sincronización de progreso entre dispositivos mediante una arquitectura backend unificada. Incluye sesiones de lectura gamificadas y contenido adaptativo para mejorar la interacción infantil. Desarrollado con React Native, Node.js, Express y MongoDB.",
        },
        {
          title: "Invernadero",
          description:
            "Sistema IoT de agricultura inteligente diseñado para monitorear y automatizar invernaderos en tiempo real. Sensores Arduino y ESP32 recopilan datos de humedad, temperatura y luz ambiental mediante Bluetooth Low Energy (BLE), permitiendo activar reglas automatizadas de riego y control climático. Incluye aplicación móvil en React Native con monitoreo en tiempo real, gráficas históricas y control manual del sistema.",
        },
        {
          title: "Tecnosol",
          description:
            "Sistema web administrativo ERP/CRM para la gestión integral de proyectos de instalación solar en sectores residenciales, industriales y comerciales. Permite administrar pedidos, mantenimientos, modelos de equipos, pagos y estadísticas empresariales mediante dashboards interactivos y generación de reportes PDF. Desarrollado con React, TypeScript, Node.js, Express y MySQL, incorporando control de acceso basado en roles y consumo de APIs REST.",
        },
      ],
    },
    contact: {
      title: "Contáctame",
      subtitle:
        "¿Tienes un proyecto en mente o solo quieres saludar? Me encantaría saber de ti.",
      infoTitle: "Información de Contacto",
      email: "Correo",
      phone: "Teléfono",
      form: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        placeholders: {
          name: "Juan Pérez",
          email: "juan@ejemplo.com",
          subject: "Consulta de Proyecto",
          message: "Tu mensaje aquí...",
        },
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};
