// ButtonDuo.jsx
import React from "react";
import ButtonComponentsRed from "./ButtonComponentsRed";
import Button from "./ButtonComponents";

function ButtonDuo({ data, ...props }) {
  // Si les données viennent de Strapi
  if (data) {
    const { redButton, orangeButton, isEnabled = true } = data;

    if (!isEnabled) return null;

    return (
      <div className="buttonSection">
        {redButton && (
          <ButtonComponentsRed
            text={redButton.text}
            href={redButton.href}
            target={redButton.target}
          />
        )}
        {orangeButton && (
          <Button
            text={orangeButton.text}
            href={orangeButton.href}
            target={orangeButton.target}
          />
        )}
      </div>
    );
  }

  // Utilisation directe (compatibilité existante)
  const { redButtonProps, orangeButtonProps } = props;

  return (
    <div className="buttonSection">
      <ButtonComponentsRed {...redButtonProps} />
      <Button {...orangeButtonProps} />
    </div>
  );
}

export default ButtonDuo;
