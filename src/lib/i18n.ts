// All portfolio content in EN and ES.
// Keep tone: professional, technical, direct, calm.

export type Lang = "en" | "es";

export const translations = {
  en: {
    // Navbar
    nav: {
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },

    // Hero
    hero: {
      role: "Software Developer",
      tagline: "Building reliable software for real businesses.",
      description:
        "I focus on clean architecture, production-ready systems, and solving real problems. No unnecessary complexity — just well-structured code that works.",
      location: "Based remotely",
      availability: "Available for projects",
      cta: "View projects",
    },

    // Section labels
    sections: {
      projects: "Projects",
      stack: "Stack",
      currently: "Currently",
      upcoming: "Upcoming",
      contact: "Contact",
    },

    // Projects
    projects: {
      live: "live",
      dev: "dev",
      inDevelopment: "In development",
    },

    // Currently
    currently: [
      { label: "Building", value: "SGV — inventory & POS platform" },
      { label: "Learning", value: "Systems architecture & performance optimization" },
      { label: "Workflow", value: "Hyprland, Neovim, minimal tooling" },
      { label: "Focus",    value: "Clean code, real-world reliability" },
    ],

    // Upcoming
    upcoming: [
      "Dotfiles & Setup",
      "Dev Tooling",
      "Workflow Notes",
      "Technical Blog",
    ],

    // Contact
    contact: {
      intro: "Available for focused, well-scoped projects. Reach out directly.",
      links: [
        { label: "Email",    display: "hello@carlos.dev" },
        { label: "GitHub",   display: "github.com/carlos" },
        { label: "LinkedIn", display: "linkedin.com/in/carlos" },
      ],
    },

    // Footer
    footer: {
      rights: "All rights reserved.",
    },
  },

  es: {
    // Navbar
    nav: {
      projects: "Proyectos",
      stack: "Stack",
      contact: "Contacto",
    },

    // Hero
    hero: {
      role: "Desarrollador de Software",
      tagline: "Software confiable para negocios reales.",
      description:
        "Me enfoco en arquitectura limpia, sistemas listos para producción y resolver problemas concretos. Sin complejidad innecesaria — solo código bien estructurado que funciona.",
      location: "Trabajo remoto",
      availability: "Disponible para proyectos",
      cta: "Ver proyectos",
    },

    // Section labels
    sections: {
      projects: "Proyectos",
      stack: "Stack",
      currently: "Actualmente",
      upcoming: "Próximamente",
      contact: "Contacto",
    },

    // Projects
    projects: {
      live: "activo",
      dev: "dev",
      inDevelopment: "En desarrollo",
    },

    // Currently
    currently: [
      { label: "Construyendo", value: "SGV — plataforma de inventario y POS" },
      { label: "Aprendiendo",  value: "Arquitectura de sistemas y optimización de rendimiento" },
      { label: "Workflow",     value: "Hyprland, Neovim, herramientas mínimas" },
      { label: "Enfoque",      value: "Código limpio, confiabilidad en producción" },
    ],

    // Upcoming
    upcoming: [
      "Dotfiles & Configuración",
      "Dev Tooling",
      "Notas de Workflow",
      "Blog Técnico",
    ],

    // Contact
    contact: {
      intro: "Disponible para proyectos concretos y bien definidos. Escribime directamente.",
      links: [
        { label: "Email",    display: "hello@carlos.dev" },
        { label: "GitHub",   display: "github.com/carlos" },
        { label: "LinkedIn", display: "linkedin.com/in/carlos" },
      ],
    },

    // Footer
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Translations = typeof translations.en;
