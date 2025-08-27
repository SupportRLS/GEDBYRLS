import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import FormData from "form-data";

// ===== Strapi config =====
const STRAPI_URL = process.env.STRAPI_API_URL;
const API_TOKEN = process.env.STRAPI_API_TOKEN;

// ===== Mapping icônes menu =====
const ICON_MAPPING = {
  avocat: "iconeAvocat",
  "expert-comptable": "iconeComptable",
  association: "iconeAssociation",
  "tpe-pme": "iconePMETPE",
  "grands-groupes": "iconeGrandGroupe",
  sante: "iconeSante",
  architectes: "iconeArchitecte",
  btp: "iconeBTP",
  "secteur-public": "iconeSecteurPublic",
  finance: "iconeFinance",
  commercial: "iconeCommercial",
  "freelance-independant": "iconeFreelance",
  "medico-social-associatif": "iconeMedicoSocial",
};

// ===== __dirname en ESM =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Upload image =====
async function uploadImage(imagePath) {
  try {
    const fullPath = path.join(__dirname, "public", imagePath);

    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️ Image non trouvée: ${fullPath}`);
      return null;
    }

    const form = new FormData();
    form.append("files", fs.createReadStream(fullPath));

    const response = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: form,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Upload failed: ${response.status} - ${text}`);
    }

    const data = await response.json();
    return data[0]?.id || null;
  } catch (error) {
    console.error(`❌ Erreur upload image ${imagePath}:`, error.message);
    return null;
  }
}

// ===== Créer un secteur =====
async function createSecteur(secteurData) {
  try {
    console.log(`Importing secteur: ${secteurData.titre}...`);

    // Upload images
    const imageId = secteurData.image
      ? await uploadImage(secteurData.image)
      : null;
    const imagebeneficesId = secteurData.imagebenefices
      ? await uploadImage(secteurData.imagebenefices)
      : null;
    const priseEnMainImageId = secteurData.prise_en_main?.image
      ? await uploadImage(secteurData.prise_en_main.image)
      : null;

    // Préparer payload Strapi
    const strapiData = {
      data: {
        slug: secteurData.slug,
        titre: secteurData.titre,
        accroche: secteurData.accroche,
        description: secteurData.description,
        titreEnjeux: secteurData.titreEnjeux,
        descriptionEnjeux: secteurData.descriptionEnjeux,
        titreEnjeux2: secteurData.titreEnjeux2,
        paragrapheEnjeux: secteurData.paragrapheEnjeux,
        titreFonctionnalite: secteurData.titreFonctionnalité,
        titrebenefices: secteurData.titrebenefices,
        benefices: secteurData.benefices,
        cta: secteurData.cta,
        contenu: secteurData.contenu,
        afficherDansMenu: true,
        ordreMenu: 0,
        iconeMenu: ICON_MAPPING[secteurData.slug] || null,

        ...(imageId && { image: imageId }),
        ...(imagebeneficesId && { imagebenefices: imagebeneficesId }),

        enjeux:
          secteurData.enjeux?.map((e) => ({
            title: e.title,
            icone: e.icone,
          })) || [],
        fonctionnalites:
          secteurData.fonctionnalites?.map((f) => ({
            titre: f.titre,
            contenu: f.contenu,
          })) || [],

        conformite: secteurData.conformite
          ? {
              titre: secteurData.conformite.titre,
              contenu: secteurData.conformite.contenu,
            }
          : null,

        prise_en_main: secteurData.prise_en_main
          ? {
              titre: secteurData.prise_en_main.titre,
              contenu: secteurData.prise_en_main.contenu,
              ...(priseEnMainImageId && { image: priseEnMainImageId }),
            }
          : null,

        formation: secteurData.formation
          ? {
              titre: secteurData.formation.titre,
              contenu:
                secteurData.formation.contenu?.map((m) => ({
                  title: m.title,
                  icone: m.icone,
                })) || [],
            }
          : null,
      },
    };

    const response = await fetch(`${STRAPI_URL}/api/secteurs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(strapiData),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Failed to create secteur: ${response.status} - ${text}`);
    }

    console.log(`✅ Secteur "${secteurData.titre}" importé avec succès`);
  } catch (error) {
    console.error(
      `❌ Erreur lors de l'import du secteur "${secteurData.titre}":`,
      error.message
    );
  }
}

// ===== Importer tous les secteurs =====
async function importAllSecteurs() {
  try {
    const jsonPath = path.join(__dirname, "data.json");
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

    console.log(`Importing ${jsonData.length} secteurs...`);

    for (const secteur of jsonData) {
      await createSecteur(secteur);
      await new Promise((r) => setTimeout(r, 1000)); // pause pour éviter surcharge
    }

    console.log("🎉 Import terminé !");
  } catch (error) {
    console.error("❌ Erreur lors de l'import:", error.message);
    process.exit(1);
  }
}

// ===== Vérification token =====
if (!API_TOKEN || API_TOKEN === "YOUR_API_TOKEN_HERE") {
  console.error("❌ Veuillez configurer votre API_TOKEN dans le fichier .env");
  process.exit(1);
}

// ===== Lancer l'import =====
importAllSecteurs();
