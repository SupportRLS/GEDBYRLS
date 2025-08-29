import React from "react";
import ButtonDuo from "./ButtonDuo";

// Composants spéciaux avec logique personnalisée
const SpecialComponents = {
  "ui.button-duo": ButtonDuo,
  // Ajoutez ici d'autres composants spéciaux si nécessaire
  // "ui.hero-banner": HeroBanner,
  // "ui.contact-form": ContactForm,
};

// Composant universel pour tous les autres composants Strapi
function UniversalComponent({ data, componentType }) {
  return (
    <div
      className="my-6 p-4 bg-white rounded-lg shadow-sm border"
      data-component={componentType} // Pour le debug
    >
      {/* Titre du composant pour debug (à retirer en production) */}
      <div className="text-xs text-gray-400 mb-2 border-b pb-1">
        Composant: {componentType}
      </div>

      {Object.entries(data).map(([key, value]) => {
        // Ignorer les champs système
        if (
          key === "id" ||
          key === "__component" ||
          key === "createdAt" ||
          key === "updatedAt"
        ) {
          return null;
        }

        // Si c'est un objet avec href et text = bouton/lien
        if (typeof value === "object" && value?.href && value?.text) {
          return (
            <a
              key={key}
              href={value.href}
              target={value.target || "_self"}
              rel={
                value.target === "_blank" ? "noopener noreferrer" : undefined
              }
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mr-2 mb-2 transition-colors"
            >
              {value.text}
            </a>
          );
        }

        // Si c'est un objet avec url = image
        if (typeof value === "object" && value?.url) {
          const imageUrl = value.url.startsWith("http")
            ? value.url
            : `${process.env.REACT_APP_STRAPI_URL || "http://localhost:1337"}${
                value.url
              }`;

          return (
            <div key={key} className="mb-4">
              <img
                src={imageUrl}
                alt={value.alt || value.name || "Image"}
                className="w-full rounded"
                loading="lazy"
              />
              {value.caption && (
                <p className="text-sm text-gray-600 mt-1 text-center italic">
                  {value.caption}
                </p>
              )}
            </div>
          );
        }

        // Si c'est un tableau d'images (galerie)
        if (Array.isArray(value) && value.length > 0 && value[0]?.url) {
          return (
            <div key={key} className="mb-4">
              <h4 className="text-lg font-semibold mb-2 capitalize">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {value.map((img, index) => {
                  const imageUrl = img.url.startsWith("http")
                    ? img.url
                    : `${
                        process.env.REACT_APP_STRAPI_URL ||
                        "http://localhost:1337"
                      }${img.url}`;

                  return (
                    <img
                      key={index}
                      src={imageUrl}
                      alt={img.alt || `Image ${index + 1}`}
                      className="w-full h-32 object-cover rounded"
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
          );
        }

        // Si c'est un tableau de composants (composants imbriqués)
        if (Array.isArray(value) && value.length > 0 && value[0]?.__component) {
          return (
            <div key={key} className="mb-4">
              <h4 className="text-lg font-semibold mb-2 capitalize">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </h4>
              {value.map((nestedComponent, index) => (
                <DynamicComponent key={index} component={nestedComponent} />
              ))}
            </div>
          );
        }

        // Si c'est du HTML ou texte enrichi
        if (
          typeof value === "string" &&
          (value.includes("<") || value.includes("**") || value.includes("##"))
        ) {
          return (
            <div
              key={key}
              className="prose max-w-none mb-4"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          );
        }

        // Si c'est du texte avec des retours à la ligne
        if (typeof value === "string" && value.includes("\n")) {
          return (
            <div key={key} className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-1 capitalize">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: value.replace(/\n/g, "<br>"),
                }}
              />
            </div>
          );
        }

        // Titre principal (si le champ s'appelle title, heading, etc.)
        if (
          typeof value === "string" &&
          ["title", "heading", "titre", "nom"].includes(key.toLowerCase())
        ) {
          return (
            <h2 key={key} className="text-2xl font-bold mb-4 text-gray-800">
              {value}
            </h2>
          );
        }

        // Texte simple
        if (typeof value === "string" && value.trim()) {
          return (
            <div key={key} className="mb-3">
              <h4 className="text-sm font-medium text-gray-700 mb-1 capitalize">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </h4>
              <p className="text-gray-900">{value}</p>
            </div>
          );
        }

        // Nombres
        if (typeof value === "number") {
          return (
            <div key={key} className="mb-2">
              <span className="text-sm font-medium text-gray-700 capitalize">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                :
              </span>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                {value}
              </span>
            </div>
          );
        }

        // Booléens
        if (typeof value === "boolean") {
          return (
            <div key={key} className="mb-2">
              <span
                className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                  value
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                :<span className="ml-1">{value ? "✓" : "✗"}</span>
              </span>
            </div>
          );
        }

        // Objets complexes (relations, etc.)
        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          return (
            <div key={key} className="mb-4 p-3 bg-gray-50 rounded">
              <h4 className="text-sm font-medium text-gray-700 mb-2 capitalize">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </h4>
              <pre className="text-xs text-gray-600 overflow-x-auto">
                {JSON.stringify(value, null, 2)}
              </pre>
            </div>
          );
        }

        // Autres valeurs
        return (
          <div key={key} className="mb-2">
            <span className="text-sm font-medium text-gray-700 capitalize">
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              :
            </span>
            <span className="ml-2">{String(value)}</span>
          </div>
        );
      })}
    </div>
  );
}

function DynamicComponent({ component }) {
  // Vérifier que le composant existe
  if (!component || typeof component !== "object") {
    return (
      <div className="my-4 p-4 bg-yellow-100 border border-yellow-300 rounded">
        <p className="text-yellow-800">⚠️ Composant invalide ou manquant</p>
      </div>
    );
  }

  const { __component, ...data } = component;

  // Vérifier que __component existe
  if (!__component) {
    return (
      <div className="my-4 p-4 bg-red-100 border border-red-300 rounded">
        <p className="text-red-800">
          ❌ Type de composant manquant (__component)
        </p>
        <pre className="text-xs mt-2 text-gray-600">
          {JSON.stringify(component, null, 2)}
        </pre>
      </div>
    );
  }

  // Si c'est un composant spécial, l'utiliser
  if (SpecialComponents[__component]) {
    const Component = SpecialComponents[__component];
    return <Component data={data} />;
  }

  // Sinon, afficher avec le composant universel
  return <UniversalComponent data={data} componentType={__component} />;
}

export default DynamicComponent;
