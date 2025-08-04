import React from "react";
import "./style/formHomePage.css";
function FormHomePage() {
  const formspreeURL = "https://formspree.io/f/xldbgawj";
  return (
    <div className="formHomePage">
      <h2>Contacter nos experts GED</h2>
      <form action="http://localhost:3000/forms" method="POST">
        <input type="text" id="name" name="name" placeholder="Nom" required />
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Prénom"
          required
        />
        <input
          type="text"
          id="société"
          name="société"
          placeholder="Société"
          required
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Téléphone"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email professionnel"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Commentaire"
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
export default FormHomePage;
