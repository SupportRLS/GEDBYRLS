import type { Schema, Struct } from '@strapi/strapi';

export interface ConformiteConformite extends Struct.ComponentSchema {
  collectionName: 'components_conformite_conformites';
  info: {
    description: 'Section conformit\u00E9';
    displayName: 'Conformit\u00E9';
  };
  attributes: {
    contenu: Schema.Attribute.Text & Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EnjeuxEnjeu extends Struct.ComponentSchema {
  collectionName: 'components_enjeux_enjeux';
  info: {
    description: 'Un enjeu avec titre et ic\u00F4ne';
    displayName: 'Enjeu';
  };
  attributes: {
    icone: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FonctionnalitesFonctionnalite extends Struct.ComponentSchema {
  collectionName: 'components_fonctionnalites_fonctionnalites';
  info: {
    description: 'Une fonctionnalit\u00E9 avec titre et contenu';
    displayName: 'Fonctionnalit\u00E9';
  };
  attributes: {
    contenu: Schema.Attribute.Text & Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormationFormation extends Struct.ComponentSchema {
  collectionName: 'components_formation_formations';
  info: {
    description: 'Section formation avec modules';
    displayName: 'Formation';
  };
  attributes: {
    contenu: Schema.Attribute.Component<'formation.module', true>;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormationModule extends Struct.ComponentSchema {
  collectionName: 'components_formation_modules';
  info: {
    description: 'Un module de formation';
    displayName: 'Module de formation';
  };
  attributes: {
    icone: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PriseEnMainPriseEnMain extends Struct.ComponentSchema {
  collectionName: 'components_prise_en_main_prise_en_mains';
  info: {
    description: 'Section prise en main';
    displayName: 'Prise en main';
  };
  attributes: {
    contenu: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'FeatureCard';
  };
  attributes: {
    icone: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::icons-field.icon',
        {
          output: 'name';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTexteAvecImageADroite extends Struct.ComponentSchema {
  collectionName: 'components_shared_texte_avec_image_a_droites';
  info: {
    displayName: 'Texte avec image \u00E0 droite';
  };
  attributes: {
    Contenu: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Seo: Schema.Attribute.Component<'shared.seo', true>;
    Titre: Schema.Attribute.String;
  };
}

export interface SharedTexteAvecImageAGauche extends Struct.ComponentSchema {
  collectionName: 'components_shared_texte_avec_image_a_gauches';
  info: {
    displayName: 'Texte avec image \u00E0 gauche';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Seo: Schema.Attribute.Component<'shared.seo', true>;
    Texte: Schema.Attribute.Text;
    Titre: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'conformite.conformite': ConformiteConformite;
      'enjeux.enjeu': EnjeuxEnjeu;
      'fonctionnalites.fonctionnalite': FonctionnalitesFonctionnalite;
      'formation.formation': FormationFormation;
      'formation.module': FormationModule;
      'prise-en-main.prise-en-main': PriseEnMainPriseEnMain;
      'shared.feature-card': SharedFeatureCard;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.texte-avec-image-a-droite': SharedTexteAvecImageADroite;
      'shared.texte-avec-image-a-gauche': SharedTexteAvecImageAGauche;
    }
  }
}
