import {
    avestruzImg,
    bisonteAmericanoImg,
    cacatuaCrestaAmarillaImg,
    cocodriloImg,
    flamencoImg,
    hipopotamoImg,
    lemurDeColaAnilladaImg,
    patoDomesticoImg,
    tigreDeBengalaImg
} from "../assets/animals";
import type { ImageMetadata } from "astro";

export type Animal = {
    id: number;
    name: string;
    scientificName: string;
    description: string;
    image: ImageMetadata;
    imageAlt: string;
    shapeColor?: string;
    infoUrl?: string;
    detailsUrl?: string;
};

export const animals: Animal[] = [
    {
        id: 1,
        name: "Tigre de Bengala",
        scientificName: "Panthera tigris",
        description:
            "Gran depredador solitario, nadador experto, con un pelaje único para cada ejemplar.",
        image: tigreDeBengalaImg,
        imageAlt: "Tigre de Bengala",
        shapeColor: "var(--color-extended-orange-500)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 2,
        name: "Bisonte Americano",
        scientificName: "Bison bison",
        description:
            "Los bisontes tienen un pelaje de color marron oscuro durante el invierno y uno mas liviano de color marron claro durante el verano.",
        image: bisonteAmericanoImg,
        imageAlt: "Bisonte Americano",
        shapeColor: "var(--color-extended-orange-100)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 3,
        name: "Avestruz",
        scientificName: "Struthio camelus",
        description:
            "El ave mas grande del mundo, de gran velocidad terrestre y con alas que usa para equilibrarse al correr.",
        image: avestruzImg,
        imageAlt: "Avestruz",
        shapeColor: "var(--color-neutral-white-900)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 4,
        name: "Cacatua de Cresta Amarilla",
        scientificName: "Cacatua galerita",
        description:
            "Ave inteligente y social, reconocida por su plumaje blanco y su llamativa cresta amarilla.",
        image: cacatuaCrestaAmarillaImg,
        imageAlt: "Cacatua de Cresta Amarilla",
        shapeColor: "var(--color-extended-yellow-500)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 5,
        name: "Cocodrilo",
        scientificName: "Crocodylus niloticus",
        description:
            "Reptil semiacuatico con una mordida muy potente y excelente capacidad para camuflarse en el agua.",
        image: cocodriloImg,
        imageAlt: "Cocodrilo",
        shapeColor: "var(--color-accent-green-500)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 6,
        name: "Flamenco",
        scientificName: "Phoenicopterus roseus",
        description:
            "Ave zancuda de color rosado que vive en lagunas y se alimenta filtrando pequenos organismos del agua.",
        image: flamencoImg,
        imageAlt: "Flamenco",
        shapeColor: "var(--color-extended-red-100)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 7,
        name: "Hipopotamo",
        scientificName: "Hippopotamus amphibius",
        description:
            "Mamifero semiacuatico de gran tamano, pasa gran parte del dia en el agua para regular su temperatura.",
        image: hipopotamoImg,
        imageAlt: "Hipopotamo",
        shapeColor: "var(--color-extended-yellow-100)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 8,
        name: "Lemur de Cola Anillada",
        scientificName: "Lemur catta",
        description:
            "Primates sociales de Madagascar, conocidos por su cola con anillos blancos y negros.",
        image: lemurDeColaAnilladaImg,
        imageAlt: "Lemur de Cola Anillada",
        shapeColor: "var(--color-extended-orange-100)",
        infoUrl: "#",
        detailsUrl: "#"
    },
    {
        id: 9,
        name: "Pato Domestico",
        scientificName: "Anas platyrhynchos domesticus",
        description:
            "Ave acuática adaptable y sociable, frecuente en granjas y lagunas urbanas.",
        image: patoDomesticoImg,
        imageAlt: "Pato Domestico",
        shapeColor: "var(--color-extended-yellow-100)",
        infoUrl: "#",
        detailsUrl: "#"
    }
];
