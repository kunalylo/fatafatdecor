import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <div className="whatsapp-float">
      <div className="wa-tooltip">Chat with us! 💬</div>
      <a
        className="wa-btn"
        href="https://wa.me/918002266606"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={28} fill="white" />
      </a>
    </div>
  );
}
