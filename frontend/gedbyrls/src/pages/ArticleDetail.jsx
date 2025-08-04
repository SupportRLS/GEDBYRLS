import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { STRAPI_API_URL } from "../api/config";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${STRAPI_API_URL}/articles?filters[slug][$eq]=${slug}&populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement de l'article :", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Chargement...</p>;
  if (!article) return <p>Article non trouvé.</p>;

  const imageUrl = article.cover?.url
    ? `http://localhost:1337${article.cover.url}`
    : null;

  return (
    <div>
      {" "}
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full rounded-lg mb-6"
          />
        )}
        <p className="text-lg text-gray-700 mb-4">{article.description}</p>

        {article.blocks?.map((block) =>
          block.__component === "shared.rich-text" ? (
            <div key={block.id} className="prose">
              <p>{block.body}</p>
            </div>
          ) : null
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
