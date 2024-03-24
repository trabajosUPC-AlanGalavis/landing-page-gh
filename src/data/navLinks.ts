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
    { label: "Beneficios", destination: "/#beneficios" },
    { label: "Planes", destination: "/#planes" },
    { label: "Preguntas frecuentes", destination: "/#preguntas-frecuentes" },
    { label: "Acerca de", destination: "/#acerca-de" },
    { label: "Contacto", destination: "/#contacto" },
  ]
}