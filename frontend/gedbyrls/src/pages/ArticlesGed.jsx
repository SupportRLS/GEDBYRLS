import React, { useEffect, useState } from "react";
import { getArticles } from "../api/articles";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet";

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

  if (loading) return <div className="loader"></div>;

  return (
    <div>
      <Helmet>
        <title>Article - Ged</title>
        <meta
          name="description"
          content="Consultez nos articles sur la gestion électronique de documents avec Zeendoc pour simplifier l’archivage, la traçabilité et la productivité de votre entreprise."
        />
      </Helmet>
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Articles GED</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const imageUrl = article.cover?.url
              ? `http://localhost:1337${article.cover.url}`
              : null;

            return (
              <div key={article.id} className="bg-white rounded-xl shadow p-4">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <Link
                  to={`/solution/articles/${article.slug}`}
                  className="text-red-600 font-medium hover:underline"
                >
                  Lire l’article →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlesGed;
/* HTML:  */
