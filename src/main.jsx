import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next"; // Importa el proveedor de i18next para envolver la aplicación
import { NextUIProvider } from "@nextui-org/react";
import i18next from "i18next"; // Importa la instancia de i18next
import "./tailwind.css";

import global_es from "./translations/es/global.json"; // Importa las traducciones en español
import global_en from "./translations/en/global.json"; // Importa las traducciones en inglés

const userLanguage = navigator.language.split("-")[0]; // Obtiene el idioma del usuario del navegador y lo usa como idioma predeterminado

const language = ["es", "en"].includes(userLanguage) ? userLanguage : "en"; // Verifica si el idioma del navegador es "es" o "en", de lo contrario, establece el idioma predeterminado como "en"

i18next.init({
  interpolation: { escapeValue: false }, // Configuración de interpolación para evitar la necesidad de escapar valores
  lng: language, // Establece el idioma predeterminado
  resources: {
    es: {
      global: global_es, // Define las traducciones en español
    },
    en: {
      global: global_en, // Define las traducciones en inglés
    },
  },
});

// Renderiza la aplicación en el elemento con el id "root" usando los proveedores de i18next y NextUI
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      {/* Envuelve la aplicación con el proveedor de i18next */}
      <NextUIProvider>
        {/* Envuelve la aplicación con el proveedor de NextUI */}
        <App /> {/* Renderiza el componente principal de la aplicación */}
      </NextUIProvider>
    </I18nextProvider>
  </React.StrictMode>
);
