import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ReactMarkdown from "react-markdown";

function MentionsLegalesPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchMentions = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/mention-legale"
        );
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

export default MentionsLegalesPage;
