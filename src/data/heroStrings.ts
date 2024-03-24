import type {Translatable} from "../models/Translatable.ts";

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
}

export const heroStrings: Translatable<HeroData> = {
  en: {
    title: "Keep better control of your crops from a single platform",
    subtitle: "Leave handwritten records behind",
    description: "Welcome to Greenhouse, the web application that allows you to monitor and manage all your factory processes remotely, for a low subscription price."
  },
  es: {
    title: "Lleva un mejor control de tus cultivos desde una única plataforma",
    subtitle: "Deja atrás a los registros escritos a mano",
    description: "Bienvenido a Greenhouse, la aplicación web que te permite supervisar y gestionar todos los procesos de tu fábrica de manera remota, por un bajo precio de suscripción."
  }
}