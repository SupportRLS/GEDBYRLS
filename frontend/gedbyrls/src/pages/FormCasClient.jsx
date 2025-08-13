import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FormCasClient() {
  const [loading, setLoading] = useState(false);
  const [casClients, setCasClients] = useState([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [captchaToken, setCaptchaToken] = useState(null);
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCasClients = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/cas-clients`);
        const json = await response.json();
        setCasClients(json.data || []);
      } catch (error) {
        console.error("Erreur lors du chargement des cas clients:", error);
      } finally {
        setLoadingClients(false);
      }
    };
    fetchCasClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Merci de valider le captcha.");
      return;
    }

    const prenom = e.target.prenom.value.trim();
    const nom = e.target.nom.value.trim();
    const email = e.target.email.value.trim();
    const entreprise = e.target.entreprise.value.trim();
    const taille = e.target.taille.value;
    const secteur = e.target.secteur.value.trim();
    const telephone = e.target.telephone.value.trim();
    const message = e.target.message.value.trim();
    const documentKey = e.target.documentKey.value;

    if (!prenom) {
      alert("Veuillez saisir votre prénom.");
      return;
    }
    if (!nom) {
      alert("Veuillez saisir votre nom.");
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Veuillez saisir un email valide.");
      return;
    }
    if (!documentKey) {
      alert("Veuillez sélectionner un cas client.");
      return;
    }

    setLoading(true);

    try {
      const formData = {
        prenom,
        nom,
        fullName: prenom + " " + nom,
        email,
        entreprise,
        taille,
        secteur,
        telephone,
        message,
        documentKey, // ID du cas client sélectionné
        type: "cas-client",
        captchaToken,
      };

      const response = await fetch(`${apiUrl}/api/email-service`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      alert(data.message || "✅ Votre demande a été envoyée avec succès !");
      e.target.reset();
      setCaptchaToken(null);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert(`❌ Une erreur est survenue : ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="PageFormCasClient">
      <Header />

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6  mt-10 mb-10 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Demande de cas client
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Prénom :
          </label>
          <input
            type="text"
            name="prenom"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Nom :</label>
          <input
            type="text"
            name="nom"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email :
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Entreprise :
          </label>
          <input
            type="text"
            name="entreprise"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Taille de l'entreprise :
          </label>
          <select
            name="taille"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            <option value="">-- Choisissez --</option>
            <option value="TPE">TPE (moins de 10 salariés)</option>
            <option value="PME">PME (10 à 250 salariés)</option>
            <option value="ETI">ETI (250 à 5 000 salariés)</option>
            <option value="Grand groupe">
              Grand groupe (plus de 5 000 salariés)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Secteur :
          </label>
          <input
            type="text"
            name="secteur"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Téléphone :
          </label>
          <input
            type="tel"
            name="telephone"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message :
          </label>
          <textarea
            name="message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            placeholder="Votre message d'accompagnement"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Choisissez un cas client :
          </label>
          {loadingClients ? (
            <p>Chargement des cas clients...</p>
          ) : (
            <select
              name="documentKey"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              <option value="">-- Sélectionnez un cas client --</option>
              {casClients.length === 0 && (
                <option disabled>Aucun cas client disponible</option>
              )}
              {casClients.map((casClient) => (
                <option key={casClient.id} value={casClient.id}>
                  {casClient.Titre}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mt-4">
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={(token) => setCaptchaToken(token)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Recevoir le cas client"}
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default FormCasClient;
