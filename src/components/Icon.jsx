import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaVideo,
  FaPalette,
  FaChartLine,
  FaLightbulb,
  FaSun,
  FaMoon,
} from "react-icons/fa6";

const map = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
  youtube: FaYoutube,
  video: FaVideo,
  palette: FaPalette,
  chart: FaChartLine,
  bulb: FaLightbulb,
  sun: FaSun,
  moon: FaMoon,
};

export default function Icon({ name, ...rest }) {
  const C = map[name] || FaPalette;
  return <C {...rest} />;
}
