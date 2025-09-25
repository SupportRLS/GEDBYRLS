import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonComponentsRed from "../components/ButtonComponentsRed";
function ErrorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFAF4] text-[#2E1D21]">
      <Header />
      <main className="flex flex-col flex-grow items-center justify-center px-6 text-center">
        {/* Gros titre 404 */}
        <h1 className="!text-[#F71344] !text-9xl !mb-6 !drop-shadow-lg font-bold">
          404
        </h1>

        {/* Texte explicatif */}
        <h2 className="!text-3xl md:text-3xl font-bold !mb-4">
          Oups... Cette page est introuvable !
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée. Retournez
          à l’accueil pour continuer votre navigation.
        </p>

        <ButtonComponentsRed text={"Retour à l'accueil"} href="/" />
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
