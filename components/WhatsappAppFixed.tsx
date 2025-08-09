import Link from "next/link";
import Image from "next/image";

export function WhatsAppFixed() {
  return (
    <Link
      href="https://wa.me/5511947737992?text=Olá!%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20orçamento%20e%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
      aria-label="WhatsApp"
    >
      <Image
        src="/log_whats.png"
        alt="Ícone do WhatsApp"
        width={60}
        height={60}
        className="shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}
