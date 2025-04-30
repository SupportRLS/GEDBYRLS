import React from "react";
import FormHomePage from "../components/formHomePage";
import Header from "../components/header";

function HomePage () {
    return (
        <>
        <Header />
        <div className="SectionOnePage">
            <h1>La solution GED qui simplifie votre quotidien</h1>
            <p>Simplifiez la gestion de vos documents et boostez votre productivité grâce à notre solution de GED intuitive et sécurisée. Centralisez l'ensemble de vos fichiers, accédez-y en quelques clics, automatisez vos processus administratifs et assurez la conformité de vos données. Notre objectif : vous faire gagner du temps, réduire vos coûts et libérer vos équipes des tâches répétitives. Découvrez dès maintenant comment transformer votre gestion documentaire en véritable levier de performance.</p>
        <FormHomePage />
        </div>
        </>
     ) 
        
    
}
export default HomePage;