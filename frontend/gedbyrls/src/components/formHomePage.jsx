import React from "react";

function FormHomePage() {
    return (
        <div className="formHomePage">
            <h2>Contacter nos experts GED</h2>
            <form action="http://localhost:3000/forms" method="POST">
                <label htmlFor="name">nom</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="surname">prénom :</label>
                <input type="text" id="surname" name="surname" required />

                <label htmlFor="société">société</label>
                <input type="text" id="société" name="société" required />

                <label htmlFor="phone">Téléphone :</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="email">Email Pro:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="Commentaire">Commentaire:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}
export default FormHomePage;