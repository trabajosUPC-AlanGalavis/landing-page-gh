import type {Translatable} from "../models/Translatable.ts";

interface SeoData {
  description: string;
  keywords: string;
}

export const seoStrings: Translatable<SeoData> = {
  en: {
    description: "Greenhouse is a web application focused on creating and storing records from the mushroom growing process. Track your mushroom cultivation activities, manage harvest data, and optimize your mushroom farming with Greenhouse.",
    keywords: "mushroom cultivation, mushroom farming, harvest tracking, mushroom growth, crop management, agricultural records, mushroom cultivation app, mushroom harvest management"
  },
  es: {
    description: "Greenhouse es una aplicación web enfocada en crear y almacenar registros del proceso de cultivo de hongos. Haz un seguimiento de tus actividades de cultivo de hongos, gestiona los datos de cosecha y optimiza tu cultivo de hongos con Greenhouse.",
    keywords: "cultivo de hongos, agricultura de hongos, seguimiento de cosechas, crecimiento de hongos, gestión de cultivos, registros agrícolas, aplicación de cultivo de hongos, gestión de cosechas de hongos"
  }
}
