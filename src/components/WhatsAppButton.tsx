"use client";

import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

interface SalesAdvisor {
  name: string;
  phoneNumber: string;
  message: string;
  image: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const salesAdvisors: SalesAdvisor[] = [
    {
      name: "Lic. Sofía Mendoza",
      phoneNumber: "722 445 6482",
      message: "¡Hola! Me gustaría obtener más información sobre las clases y precios en Cuantica Studio.",
      image: "/Sofia.jpeg" // Usando imagen existente como placeholder
    }
  ];

  const handleAdvisorClick = (advisor: SalesAdvisor) => {
    // Eliminar cualquier carácter no numérico del número de teléfono
    const cleanNumber = advisor.phoneNumber.replace(/\D/g, "");
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(advisor.message);
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    // Abrir en una nueva pestaña
    window.open(whatsappUrl, "_blank");
    // Cerrar el panel
    setIsOpen(false);
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Panel desplegable */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[280px] overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-3 flex items-center justify-between">
            <h3 className="font-semibold text-sm">Contáctanos</h3>
            <button
              onClick={togglePanel}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>
          
          {/* Contenido */}
          <div className="p-4">
            <div className="space-y-3">
              {salesAdvisors.map((advisor, index) => (
                <button
                  key={index}
                  onClick={() => handleAdvisorClick(advisor)}
                  className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-green-50 transition-colors duration-200 text-left"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 text-sm">
                      {advisor.name}
                    </div>
                    <div className="text-green-600 text-sm font-medium">
                      {advisor.phoneNumber}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Mensaje informativo */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-600 text-center">
                Comunícate con nuestros asesores de ventas para solicitar una cotización.
              </p>
            </div>
          </div>
          
          {/* Flecha hacia abajo */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={togglePanel}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute right-full mr-3 bg-black text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Contáctanos por WhatsApp
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
