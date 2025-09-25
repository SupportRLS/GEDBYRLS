import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
function CGUPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchMentions = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/cgu");
        const data = await response.json();
        console.log("Mentions légales Strapi :", data);
        setContent(data.data);
      } catch (error) {
        console.error("Erreur de chargement des mentions légales :", error);
      }
    };

    fetchMentions();
  }, []);

  if (!content) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  return (
    <div>
      <Helmet>
        <title>CGU - RLS </title>
        <meta
          name="description"
          content="Consultez les Conditions Générales d'Utilisation (CGU) de notre site web pour comprendre vos droits et responsabilités en tant qu'utilisateur."
        />
      </Helmet>
      <Header />
      <main className="!max-w-4xl !mx-auto !px-4 !py-10">
        <h1 className="!text-4xl !font-bold text-[#2E1D21] !mb-10">
          {content.titre}
        </h1>

        <div
          className="!prose max-w-none !leading-relaxed !space-y-6 
                        !prose-headings:mt-8 !prose-headings:mb-4 
                        !prose-headings:text-[#2E1D21] 
                        !prose-a:text-[#F71344] 
                        !prose-strong:text-[#E9A431]"
        >
          <ReactMarkdown breaks>{content.texte}</ReactMarkdown>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CGUPage;
