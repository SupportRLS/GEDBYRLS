// hooks/useStrapi.js - Version mise à jour avec support des slugs
import { useState, useEffect, useCallback } from "react";
import strapiService from "../services/strapiService";
// Hook pour récupérer un article par ID ou slug
export const useArticle = (identifier, useSlug = false) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticle = useCallback(async () => {
    if (!identifier) return;

    try {
      setLoading(true);
      setError(null);

      let response;
      if (useSlug) {
        const slug = encodeURIComponent(identifier);
        // build URL safe for Strapi
        response = await strapiService.apiCall(
          `articles?filters[slug][$eq]=${slug}&populate[components][populate]=*`
        );

        if (response?.data && response.data.length > 0) {
          setData(response.data[0]);
        } else {
          setData(null);
        }
      } else {
        // Recherche par ID
        response = await strapiService.getArticle(identifier);
        setData(response.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [identifier, useSlug]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return { data, loading, error, refetch: fetchArticle };
};

// Hook spécifique pour les slugs
export const useArticleBySlug = (slug) => {
  return useArticle(slug, true);
};
