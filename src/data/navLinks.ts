import type {Translatable} from "../models/Translatable.ts";
import type {NavLink} from "../models/NavLink.ts";


export const navLinks: Translatable<Array<NavLink>> = {
  en: [
    { label: "Benefits", destination: "/#benefits" },
    { label: "Pricing", destination: "/#pricing" },
    { label: "FAQ", destination: "/#faq" },
    { label: "About", destination: "/#about" },
    { label: "Contact", destination: "/#contact" },
  ],
  es: [
    { label: "Beneficios", destination: "/es/#beneficios" },
    { label: "Planes", destination: "/es/#planes" },
    { label: "Preguntas frecuentes", destination: "/es/#preguntas-frecuentes" },
    { label: "Acerca de", destination: "/es/#acerca" },
    { label: "Contacto", destination: "/es/#contacto" },
  ]
}