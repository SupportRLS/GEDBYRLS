import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqComponents from "../components/FaqComponents";
import { Helmet } from "react-helmet";
const STRAPI_URL = "http://localhost:1337/api";

function FaqAccordion() {
  const [faqCategories, setFaqCategories] = useState([]);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/faq-categories?populate=faqs`);
        console.log("Réponse FAQ:", res);

        if (!res.ok) throw new Error("Erreur API");
        const data = await res.json();
        setFaqCategories(data.data || []);
      } catch (error) {
        console.error("Erreur récupération FAQ:", error);
      }
    };
    fetchFaq();
  }, []);

  const toggleCategory = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Foire aux questions - RLS </title>
        <meta
          name="description"
          content="Trouvez des réponses aux questions fréquentes sur la gestion électronique de documents (GED) avec Zeendoc, incluant l'archivage, la sécurité et l'accès aux documents."
        />
      </Helmet>

      <div className="faqAccordion">
        <Header />
        <div className="section" style={{ marginTop: "5%" }}>
          <h1>Foire aux questions (FAQ)</h1>
          {faqCategories.map((cat, idx) => (
            <div key={cat.id} className="faqCategory">
              <h3
                onClick={() => toggleCategory(idx)}
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  backgroundColor: "#EBE2D4",
                  padding: "10px",
                  marginTop: "15px",
                  borderRadius: "25px",
                  marginLeft: "15%",
                  marginRight: "15%",
                  textAlign: "center",
                }}
              >
                {cat.category || "Sans titre"}{" "}
                {openCategoryIndex === idx ? "▲" : "▼"}
              </h3>

              {openCategoryIndex === idx && (
                <div className="faqList" style={{ paddingLeft: "15px" }}>
                  {cat.faqs?.map((faq) => (
                    <FaqComponents
                      key={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FaqAccordion;
