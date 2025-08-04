import React, { useEffect, useState } from "react";
import { getArticles } from "../api/articles";

const ArticleList = ({ articles }) => (
  <div className="p-6 space-y-8">
    {articles.map((article) => (
      <div key={article.id} className="border p-4 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 mb-2">{article.description}</p>

        {article.cover?.url && (
          <img
            src={`http://localhost:1337${article.cover.url}`}
            alt={article.title}
            className="w-full max-w-md mb-4 rounded-lg"
          />
        )}

        <p className="text-sm text-gray-500">
          Catégorie : {article.category?.name || "Non catégorisé"}
        </p>
      </div>
    ))}
  </div>
);

const ArticlesGed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des articles :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Articles GED</h1>
      {loading ? (
        <p>Chargement des articles...</p>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default ArticlesGed;
