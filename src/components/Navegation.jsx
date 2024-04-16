import React from "react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next"; // Importa el hook useTranslation de react-i18next

export default function Navegation() {
  const [t, i18n] = useTranslation("global"); // Inicializa el hook useTranslation con el namespace "global"

  // Devuelve el componente de navegación
  return (
    <Navbar position='static'>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>ACME</p>{" "}
      </NavbarBrand>
      <NavbarContent className='sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            {t("navbar.features")}{" "}
            {/* Traduce y muestra el texto para las características del navbar */}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            {t("navbar.customers")}{" "}
            {/* Traduce y muestra el texto para los clientes del navbar */}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            {t("navbar.integrations")}{" "}
            {/* Traduce y muestra el texto para las integraciones del navbar */}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          {/* Botones para cambiar el idioma */}
          <Button
            as={Link}
            color='primary'
            href='#'
            variant='flat'
            className=' mr-2'
            onClick={() => i18n.changeLanguage("es")} // Cambia el idioma a español al hacer clic
          >
            Spanish
          </Button>
          <Button
            as={Link}
            color='primary'
            href='#'
            variant='flat'
            onClick={() => i18n.changeLanguage("en")} // Cambia el idioma a inglés al hacer clic
          >
            English
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
