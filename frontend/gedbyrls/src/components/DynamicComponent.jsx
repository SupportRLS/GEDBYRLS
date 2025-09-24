import React from "react";
import ButtonDuo from "../components/ButtonDuo";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import FormHomePage from "../components/formHomePage";
import FeatureCard from "../components/FeatureCard";

// Mapping des composants spéciaux
const SpecialComponents = {
  "ui.button-duo": ButtonDuo,
  "sections.text-image-left": TextImageLeft,
  "sections.text-image-right": TextImageRight,
  "sections.form-home-page": FormHomePage,
  "sections.feature-card": FeatureCard,
};

// Composant universel pour debug / fallback
function UniversalComponent({ data, componentType }) {
  return (
    <div
      className="my-6 p-4 bg-white rounded-lg shadow-sm border"
      data-component={componentType}
    >
      <div className="text-xs text-gray-400 mb-2 border-b pb-1">
        Composant: {componentType}
      </div>
      <pre className="text-xs text-gray-600">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

// Helper pour construire l'URL complète de l'image
const buildImageUrl = (image, baseURL) => {
  if (!image) return null;

  // Priorité aux formats medium > small > url direct
  const url =
    image.formats?.medium?.url ||
    image.formats?.small?.url ||
    image.url ||
    null;

  return url ? `${baseURL}${url}` : null;
};

// Composant dynamique principal
function DynamicComponent({ component }) {
  if (!component || typeof component !== "object") {
    return (
      <div className="my-4 p-4 bg-yellow-100 border border-yellow-300 rounded">
        <p className="text-yellow-800">⚠️ Composant invalide ou manquant</p>
      </div>
    );
  }

  const { __component, ...data } = component;

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

  // ⚡ Gestion spécifique pour ButtonDuo
  if (__component === "ui.button-duo") {
    const Component = SpecialComponents[__component];

    const dataProps = {
      data: {
        redButton: {
          text: data.redButton?.text,
          href: data.redButton?.href,
          target: data.redButton?.target || "_self",
        },
        orangeButton: {
          text: data.orangeButton?.text,
          href: data.orangeButton?.href,
          target: data.orangeButton?.target || "_self",
        },
        isEnabled: data.isEnabled,
      },
    };

    return <Component {...dataProps} />;
  }

  // ⚡ Gestion des autres composants spéciaux
  if (SpecialComponents[__component]) {
    const Component = SpecialComponents[__component];

    // Exemple pour gérer images (TextImageLeft / Right)
    const BASE_URL = "http://localhost:1337";
    const imageSrc = data.image?.formats?.medium?.url
      ? `${BASE_URL}${data.image.formats.medium.url}`
      : data.image?.formats?.small?.url
      ? `${BASE_URL}${data.image.formats.small.url}`
      : data.image?.url
      ? `${BASE_URL}${data.image.url}`
      : null;

    const props = { ...data, imageSrc };

    return <Component {...props} />;
  }

  // Fallback universel si le composant n'est pas reconnu
  return <UniversalComponent data={data} componentType={__component} />;
}

export default DynamicComponent;
