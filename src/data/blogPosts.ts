import familiaZoodomImg from "../assets/images/gallery-familia-zoodom.webp";
import flamencosImg from "../assets/images/gallery-flamencos.webp";
import hipopotamoImg from "../assets/images/gallery-hipopotamo.webp";

export type BlogPost = {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    imageAlt: string;
    readTime: string;
    href: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Nuevos Nacimientos en ZOODOM",
        date: "Marzo 2026",
        category: "Conservacion",
        excerpt:
            "Celebramos nuevos nacimientos en nuestras instalaciones como parte de los programas de cuidado y proteccion de especies.",
        image: familiaZoodomImg.src,
        imageAlt: "Familia en recorrido educativo de ZOODOM",
        readTime: "4 min",
        href: "/blog/nuevos-nacimientos"
    },
    {
        id: 2,
        title: "Guia para Visitar en Familia",
        date: "Febrero 2026",
        category: "Visita",
        excerpt:
            "Recomendaciones practicas para aprovechar tu recorrido: horarios, zonas de descanso y actividades educativas para ninos.",
        image: flamencosImg.src,
        imageAlt: "Flamencos en zona de observacion",
        readTime: "5 min",
        href: "/blog/guia-visita-familia"
    },
    {
        id: 3,
        title: "Bienestar Animal y Enriquecimiento",
        date: "Enero 2026",
        category: "Educacion",
        excerpt:
            "Conoce como trabajamos el enriquecimiento ambiental diario para estimular conductas naturales y mejorar el bienestar.",
        image: hipopotamoImg.src,
        imageAlt: "Hipopotamo en habitat controlado",
        readTime: "6 min",
        href: "/blog/bienestar-animal"
    }
];
