"use client";

import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
}) => {
  const handleClick = () => {
    // Eliminar cualquier carácter no numérico del número de teléfono
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    // Abrir en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out z-50 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute right-full mr-3 bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Contáctanos por WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;
