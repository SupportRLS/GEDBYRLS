// config/strapiConfig.js

// Configuration principale de Strapi
export const STRAPI_CONFIG = {
  // URL de base de votre instance Strapi
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:1337",
  token: import.meta.env.VITE_STRAPI_TOKEN,

  // Configuration des médias
  media: {
    // URL de base pour les médias
    baseURL: process.env.REACT_APP_STRAPI_URL || "http://localhost:1337",
    // Formats d'images supportés
    supportedFormats: ["jpeg", "jpg", "png", "gif", "webp", "svg"],
    // Taille maximale en MB
    maxSize: 10,
  },

  // Configuration par défaut pour les requêtes
  defaults: {
    // Population par défaut
    populate: "deep",
    // Pagination
    pagination: {
      pageSize: 25,
      page: 1,
    },
    // Headers par défaut
    headers: {
      "Content-Type": "application/json",
    },
  },

  // Configuration des endpoints
  endpoints: {
    articles: "articles",
    pages: "pages",
    components: "components",
    upload: "upload",
    users: "users",
  },

  // Configuration du cache
  cache: {
    enabled: process.env.NODE_ENV === "production",
    ttl: 5 * 60 * 1000, // 5 minutes
  },
};

// Mapping des types de composants Strapi vers les composants React
export const COMPONENT_MAPPING = {
  // Composants de base
  "ui.button": "Button",
  "ui.button-duo": "ButtonDuo",
  "ui.hero-banner": "HeroBanner",
  "ui.text-block": "TextBlock",
  "ui.image": "Image",
  "ui.gallery": "Gallery",
  "ui.video": "Video",

  // Composants de navigation
  "ui.breadcrumb": "Breadcrumb",
  "ui.menu": "Menu",
  "ui.pagination": "Pagination",

  // Composants de contenu
  "content.article-preview": "ArticlePreview",
  "content.article-list": "ArticleList",
  "content.featured-content": "FeaturedContent",
  "content.testimonial": "Testimonial",
  "content.faq": "FAQ",

  // Composants de formulaire
  "form.contact": "ContactForm",
  "form.newsletter": "NewsletterForm",
  "form.search": "SearchForm",

  // Composants de mise en page
  "layout.section": "Section",
  "layout.container": "Container",
  "layout.grid": "Grid",
  "layout.columns": "Columns",
  "layout.spacer": "Spacer",

  // Composants SEO
  "seo.meta-tags": "MetaTags",
  "seo.open-graph": "OpenGraph",
  "seo.json-ld": "JsonLd",

  // Ajoutez ici vos composants personnalisés
};

// Configuration des champs par type de composant
export const COMPONENT_FIELD_CONFIG = {
  "ui.button": {
    required: ["text", "href"],
    optional: ["target", "variant", "size", "icon"],
  },
  "ui.button-duo": {
    required: ["primaryButton", "secondaryButton"],
    optional: ["alignment", "spacing"],
  },
  "ui.hero-banner": {
    required: ["title"],
    optional: ["subtitle", "description", "backgroundImage", "cta"],
  },
  "ui.text-block": {
    required: ["content"],
    optional: ["title", "variant", "alignment"],
  },
  "ui.image": {
    required: ["image"],
    optional: ["alt", "caption", "size", "alignment"],
  },
  "ui.gallery": {
    required: ["images"],
    optional: ["columns", "spacing", "lightbox"],
  },
  // Ajoutez la configuration pour vos autres composants
};

// Utilitaires pour la configuration
export const strapiUtils = {
  // Construire une URL complète
  buildURL: (endpoint, params = {}) => {
    const url = new URL(`/api/${endpoint}`, STRAPI_CONFIG.baseURL);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value);
      }
    });
    return url.toString();
  },

  // Construire une URL de média
  buildMediaURL: (path) => {
    if (!path) return null;
    if (path.startsWith("http")) return path;
    return `${STRAPI_CONFIG.media.baseURL}${path}`;
  },

  // Vérifier si un composant est supporté
  isComponentSupported: (componentType) => {
    return componentType in COMPONENT_MAPPING;
  },

  // Obtenir le nom du composant React
  getReactComponentName: (componentType) => {
    return COMPONENT_MAPPING[componentType] || "UniversalComponent";
  },

  // Valider les champs d'un composant
  validateComponentFields: (componentType, data) => {
    const config = COMPONENT_FIELD_CONFIG[componentType];
    if (!config) return { valid: true, errors: [] };

    const errors = [];

    // Vérifier les champs requis
    if (config.required) {
      config.required.forEach((field) => {
        if (
          !data[field] ||
          (typeof data[field] === "string" && !data[field].trim())
        ) {
          errors.push(
            `Le champ "${field}" est requis pour le composant ${componentType}`
          );
        }
      });
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  },

  // Formater les données d'un composant
  formatComponentData: (component) => {
    if (!component || typeof component !== "object") return null;

    const { __component, id, ...data } = component;

    return {
      type: __component,
      id: id,
      data: data,
      isValid: strapiUtils.validateComponentFields(__component, data).valid,
    };
  },

  // Nettoyer les données de l'API Strapi
  cleanStrapiData: (data) => {
    if (!data) return null;

    // Si c'est un objet avec attributes (format Strapi V4/V5)
    if (data.attributes) {
      return {
        id: data.id,
        ...data.attributes,
      };
    }

    // Si c'est déjà un objet simple
    return data;
  },
};

// Configuration des erreurs
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Erreur de connexion au serveur",
  NOT_FOUND: "Ressource non trouvée",
  UNAUTHORIZED: "Accès non autorisé",
  VALIDATION_ERROR: "Erreur de validation des données",
  COMPONENT_ERROR: "Erreur lors du rendu du composant",
  UPLOAD_ERROR: "Erreur lors de l'upload du fichier",
  UNKNOWN_ERROR: "Une erreur inattendue s'est produite",
};

// Configuration du cache client (si vous utilisez React Query ou SWR)
export const CACHE_CONFIG = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 10 * 60 * 1000, // 10 minutes
  refetchOnWindowFocus: false,
  refetchOnMount: true,
  retry: 2,
};

export default STRAPI_CONFIG;
