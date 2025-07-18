import {React, useState, } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FaqComponents from "../components/FaqComponents";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const faqData = [
  {
    category: " Pour les débutants",
    faqs: [
      {
        question: "C’est quoi exactement la GED ?",
        answer: "La GED (Gestion Électronique de Documents) permet de stocker, classer, rechercher et partager tous vos documents professionnels sous format numérique, en toute sécurité."
      },
      {
        question: "Est-ce que la GED remplace le papier ?",
        answer: "Oui, elle permet de numériser, archiver et gérer tous vos documents sans avoir besoin de conserver leur version papier."
      },
      {
        question: "Est-ce compliqué à mettre en place ?",
        answer: "Pas du tout. Zeendoc est conçu pour être simple à utiliser, même sans connaissances techniques. La mise en place est rapide et l’interface est intuitive."
      },
      {
        question: "Est-ce que Zeendoc convient aux petites structures ?",
        answer: "Oui, Zeendoc est parfaitement adapté aux TPE, PME, indépendants, professions libérales et associations."
      }
    ]
  },
  {
    category: " Sécurité et confidentialité",
    faqs: [
      {
        question: "Mes documents sont-ils sécurisés avec Zeendoc ?",
        answer: "Oui. Zeendoc héberge vos documents sur des serveurs sécurisés en France, avec un chiffrement des données et des sauvegardes automatiques."
      },
      {
        question: "Qui peut accéder à mes documents ?",
        answer: "Seules les personnes autorisées que vous avez définies peuvent accéder aux documents. Les droits d’accès sont entièrement personnalisables."
      },
      {
        question: "Que se passe-t-il si je perds mes identifiants ?",
        answer: "Vous pouvez réinitialiser votre mot de passe. Zeendoc applique une double authentification pour plus de sécurité."
      }
    ]
  },
  {
    category: " Fonctionnement de Zeendoc",
    faqs: [
      {
        question: "Dois-je installer un logiciel sur mon ordinateur ?",
        answer: "Non. Zeendoc est une solution 100 % en ligne. Vous accédez à vos documents via un simple navigateur internet."
      },
      {
        question: "Puis-je utiliser Zeendoc sur mobile ou tablette ?",
        answer: "Oui, la plateforme est accessible depuis n’importe quel appareil connecté à Internet : ordinateur, smartphone ou tablette."
      },
      {
        question: "Est-ce que je peux tester Zeendoc gratuitement ?",
        answer: "Oui, une démonstration gratuite est proposée. Vous pouvez aussi bénéficier d’un essai sans engagement."
      },
      {
        question: "Zeendoc est-il compatible avec mon scanner ?",
        answer: "Oui. Zeendoc est compatible avec la majorité des scanners. Vous pouvez envoyer vos documents scannés directement dans votre espace."
      },
      {
        question: "Peut-on importer des documents automatiquement ?",
        answer: "Oui. Zeendoc peut récupérer automatiquement les factures, les emails, ou encore les documents déposés dans un dossier spécifique."
      }
    ]
  },
  {
    category: " Gestion des documents",
    faqs: [
      {
        question: "Quels types de documents puis-je stocker dans Zeendoc ?",
        answer: "Tous types : factures, contrats, devis, bulletins de paie, courriers, pièces comptables, documents RH, photos, etc."
      },
      {
        question: "Est-ce que je peux ajouter des mots-clés à mes documents ?",
        answer: "Oui. Zeendoc permet d’indexer automatiquement ou manuellement les documents pour faciliter la recherche."
      },
      {
        question: "Comment retrouver un document rapidement ?",
        answer: "Grâce à un puissant moteur de recherche et à l’indexation automatique des documents (OCR), vous retrouvez un fichier en quelques secondes."
      },
      {
        question: "Puis-je annoter ou valider un document dans Zeendoc ?",
        answer: "Oui. Vous pouvez annoter, commenter, valider ou signer électroniquement vos documents."
      }
    ]
  },
  {
    category: " Utilisation métier",
    faqs: [
      {
        question: "La GED est-elle utile pour les ressources humaines ?",
        answer: "Oui, vous pouvez gérer les dossiers salariés, les congés, les fiches de paie et suivre toutes les interactions RH."
      },
      {
        question: "Puis-je centraliser ma facturation dans Zeendoc ?",
        answer: "Absolument. Vous pouvez recevoir, classer, archiver et envoyer vos factures clients et fournisseurs très facilement."
      },
      {
        question: "Est-ce que Zeendoc aide à la conformité RGPD ?",
        answer: "Oui. Zeendoc vous aide à gérer les durées de conservation, l’accès aux données, et la traçabilité exigée par le RGPD."
      }
    ]
  },
  {
    category: " Fonctionnalités avancées",
    faqs: [
      {
        question: "Peut-on automatiser certaines tâches ?",
        answer: "Oui. Zeendoc peut automatiser la reconnaissance de documents, les classements, les alertes et les rappels."
      },
      {
        question: "Puis-je créer des workflows de validation ?",
        answer: "Oui. Il est possible de définir des circuits de validation personnalisés pour vos documents (ex : bon à payer)."
      },
      {
        question: "Zeendoc permet-il la signature électronique ?",
        answer: "Oui. Vous pouvez signer vos documents directement dans l’outil via un module de signature certifiée."
      },
      {
        question: "Est-ce que je peux archiver légalement mes documents ?",
        answer: "Oui. Zeendoc est conforme aux normes NF Z42-013 et ISO, garantissant un archivage électronique à valeur probante."
      }
    ]
  },
  {
    category: " Support et accompagnement",
    faqs: [
      {
        question: "Serai-je formé pour utiliser Zeendoc ?",
        answer: "Oui. Une formation courte est proposée, et l’outil reste simple à maîtriser. Des vidéos, guides et un accompagnement sont disponibles."
      },
      {
        question: "En cas de souci, qui contacter ?",
        answer: "Vous bénéficiez d’un support client réactif par téléphone ou e-mail. L’équipe Zeendoc est là pour vous accompagner à chaque étape."
      }
    ]
  }
];

function FaqAccordion() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  return (
    
    <div className="faqAccordion" >
        <Header />
    <div className="section"
    style={{ marginTop: "5%" }}>
        <h1> Foire aux questions ( FAQ ) </h1>
      {faqData.map((cat, idx) => (
        <div key={idx} className="faqCategory"
    
        >
          <h3 className="poppins-regular" 
            onClick={() => toggleCategory(idx)} 
            style={{ cursor: "pointer", userSelect: "none", backgroundColor: "#EBE2D4", padding: "10px", marginTop: "15px", borderRadius: "25px", marginLeft: "15%", marginRight: "15%", textAlign: "center" }}
          >
            {cat.category} {openCategoryIndex === idx ? "▲" : "▼"}
          </h3>
          {openCategoryIndex === idx && (
            <div className="faqList" style={{ paddingLeft: "15px" }}>
              {cat.faqs.map((faq, i) => (
                <FaqComponents
                  key={i}
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
  );
}

export default FaqAccordion;