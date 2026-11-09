import "@/assets/css/zap.css";
import zap from "@/assets/whatsapp.png";

const FloatingWhatsApp = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5534991157227"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar com Eduardo Rojas no WhatsApp"
    className="zap"
  >
    <img src={zap} alt="" aria-hidden="true" loading="lazy" width="72" height="72" />
  </a>
);

export default FloatingWhatsApp;