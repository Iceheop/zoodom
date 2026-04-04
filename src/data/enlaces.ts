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
    imageWidth: number;
    imageHeight: number;
    url: string;
};

export const enlaces: Enlace[] = [
    {
        title: "Linea de Atencion Ciudadana",
        image: lineaAtencionCiudadanaIcon,
        imageAlt: "Icono de linea de atencion ciudadana",
        imageWidth: 238,
        imageHeight: 191,
        url: "https://311.gob.do/"
    },
    {
        title: "Gobierno Abierto",
        image: gobiernoAbiertoIcon,
        imageAlt: "Icono de gobierno abierto",
        imageWidth: 191,
        imageHeight: 191,
        url: "https://gobiernoabierto.gob.do/"
    },
    {
        title: "Emergencias 911",
        image: emergencias911Icon,
        imageAlt: "Icono de emergencias 911",
        imageWidth: 223,
        imageHeight: 191,
        url: "https://911.gob.do/"
    },
    {
        title: "Logo Nuevo",
        image: logoNuevoIcon,
        imageAlt: "Oficina Gubernamental de Tecnologías de la Información y Comunicación",
        imageWidth: 497,
        imageHeight: 191,
        url: "https://ogtic.gob.do/"
    },
    {
        title: "Logo de Mapa",
        image: logoMapaIcon,
        imageAlt: "gobierno de la república dominicana",
        imageWidth: 310,
        imageHeight: 191,
        url: "https://www.gob.do/"
    },
    {
        title: "Logo SAIP",
        image: logoSaipIcon,
        imageAlt: "Portal Único de Solicitud de Acceso a la Información Pública",
        imageWidth: 740,
        imageHeight: 191,
        url: "https://saip.gob.do/"
    },
    {
        title: "Logo Web Azul",
        image: logoAzulIcon,
        imageAlt: "Ministerio publico",
        imageWidth: 408,
        imageHeight: 191,
        url: "https://pgr.gob.do/"
    }
];
