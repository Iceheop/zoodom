import lineaAtencionCiudadanaIcon from "../assets/ui/linea-atencion-ciudadana.svg?url";
import gobiernoAbiertoIcon from "../assets/ui/gobierno-abierto.svg?url";
import emergencias911Icon from "../assets/ui/emergencias-911.svg?url";
import logoNuevoIcon from "../assets/ui/logo-institucional-nuevo.svg?url";
import logoMapaIcon from "../assets/ui/logo-mapa.svg?url";
import logoSaipIcon from "../assets/ui/logo-saip.svg?url";
import logoAzulIcon from "../assets/ui/logo-web-azul.svg?url";

export type Enlace = {
    title: string;
    image: string;
    imageAlt: string;
    url: string;
};

export const enlaces: Enlace[] = [
    {
        title: "Linea de Atencion Ciudadana",
        image: lineaAtencionCiudadanaIcon,
        imageAlt: "Icono de linea de atencion ciudadana",
        url: "#"
    },
    {
        title: "Gobierno Abierto",
        image: gobiernoAbiertoIcon,
        imageAlt: "Icono de gobierno abierto",
        url: "#"
    },
    {
        title: "Emergencias 911",
        image: emergencias911Icon,
        imageAlt: "Icono de emergencias 911",
        url: "#"
    },
    {
        title: "Logo Nuevo",
        image: logoNuevoIcon,
        imageAlt: "Logo institucional nuevo",
        url: "#"
    },
    {
        title: "Logo de Mapa",
        image: logoMapaIcon,
        imageAlt: "Logo de mapa",
        url: "#"
    },
    {
        title: "Logo SAIP",
        image: logoSaipIcon,
        imageAlt: "Logo SAIP",
        url: "#"
    },
    {
        title: "Logo Web Azul",
        image: logoAzulIcon,
        imageAlt: "Logo web azul",
        url: "#"
    }
];
