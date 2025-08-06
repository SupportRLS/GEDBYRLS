import { BsShieldLock, BsTransparency } from "react-icons/bs";
import {
  FaArchive,
  FaPaperPlane,
  FaPenNib,
  FaCalculator,
  FaHandHoldingMedical,
  FaAngleDown,
  FaSearch,
  FaFileArchive,
  FaUsers,
  FaClock,
  FaFolderOpen,
  FaSignature,
  FaGavel,
  FaExchangeAlt,
} from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import {
  MdOutlineAddAPhoto,
  MdSecurity,
  MdOutlineWeb,
  MdVerifiedUser,
  MdOutlineSell,
} from "react-icons/md";
import { GiCloudDownload, GiHammerDrop, GiProgression } from "react-icons/gi";
import { PiArticleThin, PiCircuitry } from "react-icons/pi";
import { GrCloudComputer } from "react-icons/gr";
import { HiOutlineUpload } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BiSolidBusiness, BiLockAlt } from "react-icons/bi";
import { MdAutoAwesome } from "react-icons/md";
import {
  FaFileCircleQuestion,
  FaHouseMedicalFlag,
  FaHelmetSafety,
  FaHouseChimneyWindow,
} from "react-icons/fa6";
import { MdOutlineMuseum, MdWork } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiFunctionLine } from "react-icons/ri";

export const iconMap = {
  // Secteurs
  iconeAvocat: GiHammerDrop,
  iconeBTP: FaHelmetSafety,
  iconeSante: FaHandHoldingMedical,
  iconeCommercial: MdOutlineSell,
  iconeFreelance: MdWork,
  iconeArchitecte: FaHouseChimneyWindow,
  iconeComptable: FaCalculator,
  iconePMETPE: BiSolidBusiness,
  iconeGrandGroupe: IoBusiness,
  iconeAssociation: LuHeartHandshake,
  iconeSecteurPublic: MdOutlineMuseum,
  iconeMedicoSocial: FaHouseMedicalFlag,
  iconeFinance: GrMoney,

  // Solutions
  iconeDebutGED: GiCloudDownload,
  iconeFAQ: FaFileCircleQuestion,
  iconeLogicielCompatible: MdOutlineWeb,
  iconePapierVersGED: IoNewspaperOutline,
  iconeRGPD: MdSecurity,
  iconeArticles: PiArticleThin,
  iconeFonctionnalites: RiFunctionLine,
  iconeGalerie: MdOutlineAddAPhoto,

  // Divers
  iconeArchive: FaArchive,
  iconeEnvoyer: FaPaperPlane,
  iconeSignatureStylo: FaPenNib,
  iconeUpload: HiOutlineUpload,
  iconeRecherche: FiSearch,
  iconeVerrou: BiLockAlt,
  iconeMagie: MdAutoAwesome,
  iconeFlecheBas: FaAngleDown,
  iconeCloud: GrCloudComputer,
  iconeTransparence: BsTransparency,
  iconeCircuit: PiCircuitry,
  iconeProgression: GiProgression,
  iconeUtilisateurVerifie: MdVerifiedUser,
  iconeSecuriteBouclier: BsShieldLock,
  iconeJustice: FaGavel,
  iconeRechercheAlt: FaSearch,
  iconeFichierArchive: FaFileArchive,
  iconeUtilisateur: FaUsers,
  iconeTemps: FaClock,
  iconeDossier: FaFolderOpen,
  iconeCadenas: AiOutlineLock,
  iconeSignatureCheck: FaSignature,
  iconeEchange: FaExchangeAlt,
};
