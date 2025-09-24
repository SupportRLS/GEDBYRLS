// services/strapiService.js
class StrapiService {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || "http://localhost:1337";
    this.token = import.meta.env.VITE_STRAPI_TOKEN;
  }

  // Headers par défaut
  getHeaders() {
    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // Méthode générique pour les appels API
  async apiCall(endpoint, options = {}) {
    try {
      const url = endpoint.startsWith("http")
        ? endpoint
        : `${this.baseURL}/api/${endpoint}`;

      const response = await fetch(url, {
        headers: this.getHeaders(),
        ...options,
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = text;
      }

      if (!response.ok) {
        const errMsg =
          (data && (data.error?.message || data.message)) ||
          (typeof data === "string" ? data : response.statusText);
        throw new Error(`Erreur ${response.status}: ${errMsg}`);
      }

      return data;
    } catch (error) {
      console.error("Erreur API:", error);
      throw error;
    }
  }

  // Récupérer un article avec tous ses composants
  async getArticle(id) {
    return this.apiCall(`artiarticles/${id}?populate=*`);
  }

  // Récupérer tous les articles
  async getArticles(params = {}) {
    const queryString = new URLSearchParams({
      populate: "*",
      ...params,
    }).toString();

    return this.apiCall(`articles?${queryString}`);
  }

  // Récupérer une page avec ses composants
  async getPage(slug) {
    return this.apiCall(`pages?filters[slug][$eq]=${slug}&populate=*`);
  }

  // Récupérer tous les types de composants disponibles
  async getComponentTypes() {
    return this.apiCall("content-type-builder/content-types");
  }

  // Créer un nouvel article (nécessite des permissions)
  async createArticle(data) {
    return this.apiCall("articles", {
      method: "POST",
      body: JSON.stringify({ data }),
    });
  }

  // Mettre à jour un article
  async updateArticle(id, data) {
    return this.apiCall(`articles/${id}`, {
      method: "PUT",
      body: JSON.stringify({ data }),
    });
  }

  // Supprimer un article
  async deleteArticle(id) {
    return this.apiCall(`articles/${id}`, {
      method: "DELETE",
    });
  }

  // Upload de fichiers
  async uploadFile(file, ref = null, refId = null, field = null) {
    const formData = new FormData();
    formData.append("files", file);

    if (ref) formData.append("ref", ref);
    if (refId) formData.append("refId", refId);
    if (field) formData.append("field", field);

    try {
      const response = await fetch(`${this.baseURL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          `Erreur upload ${response.status}: ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Erreur upload:", error);
      throw error;
    }
  }

  // Recherche
  async search(query, contentTypes = ["articles"]) {
    const searches = contentTypes.map((type) =>
      this.apiCall(
        `${type}?filters[$or][0][title][$containsi]=${query}&filters[$or][1][content][$containsi]=${query}&populate=deep`
      )
    );

    try {
      const results = await Promise.all(searches);
      return results.reduce((acc, result, index) => {
        acc[contentTypes[index]] = result.data || [];
        return acc;
      }, {});
    } catch (error) {
      console.error("Erreur de recherche:", error);
      throw error;
    }
  }
}

// Instance singleton
const strapiService = new StrapiService();

export default strapiService;

// Export des méthodes individuelles pour faciliter l'import
export const {
  getArticle,
  getArticles,
  getPage,
  getComponentTypes,
  createArticle,
  updateArticle,
  deleteArticle,
  uploadFile,
  search,
} = strapiService;
